// ref, https://codepen.io/timseverien/pen/XXYaZe

function getPageId(n) {
  return 'article-page-' + n;
}

function getDocumentHeight() {
  const body = document.body;
  const html = document.documentElement;

  return Math.max(
      body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight
  );
}

function getScrollTop() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset
      : (document.documentElement || document.body.parentNode
          || document.body).scrollTop;
}

function createCard(data) {
  const card = document.createElement('div');
  card.className = 'card card-1';

  const title = document.createElement('div');
  title.className = 'card-title';
  title.textContent = data.title;

  const description = document.createElement('div');
  description.className = 'card-description';
  description.textContent = data.description;

  const label = document.createElement('div');
  label.className = 'card-label';

  const authoredOn = document.createElement('span');
  authoredOn.className = 'card-authoredOn'
  authoredOn.textContent = data.authoredOn;

  const author = document.createElement('span');
  author.className = 'card-author';
  author.textContent = data.author;

  label.appendChild(authoredOn);
  label.appendChild(author);

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(label);

  card.onclick = function() {
    window.open(data.link);
  }
  return card;
}

function getArticle(data) {
  const card = createCard(data);
  const article = document.createElement('article');
  // article.className = 'card card-1';
  article.appendChild(card);
  return article;
}

function getArticlePage(page) {
  const pageElement = document.createElement('div');
  pageElement.id = getPageId(page);
  pageElement.className = 'article-list__page';

  const request = new XMLHttpRequest();
  request.open('GET', '/api/articles?page=' + encodeURI(page) + '&size=12', true)
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const articles = JSON.parse(request.responseText)
        for (const i of articles.content) {
          pageElement.appendChild(getArticle(i));
        }
      } else {
        fail()
      }
    }
  }
  request.send(null)
  return pageElement;
}

function addPaginationPage(page) {
  const pageLink = document.createElement('a');
  pageLink.href = '#' + getPageId(page);
  pageLink.innerHTML = page;

  const listItem = document.createElement('li');
  listItem.className = 'article-list__pagination__item';
  listItem.appendChild(pageLink);

  articleListPagination.appendChild(listItem);

  if (page === 2) {
    articleListPagination.classList.remove(
        'article-list__pagination--inactive');
  }
}

function fetchPage(page) {
  articleList.appendChild(getArticlePage(page));
}

function addPage(page) {
  fetchPage(page);
  // addPaginationPage(page);
}

const articleList = document.getElementById('article-list');
const articleListPagination = document.getElementById(
    'article-list-pagination');
let page = 0;

addPage(page++);

window.onscroll = function () {
  if (getScrollTop() < getDocumentHeight() - window.innerHeight) {
    return;
  }
  addPage(page++);
};

// https://codepen.io/gstricklind/pen/yvtjh?js-preprocessor=babel
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = document.getElementsByTagName('footer')[0].clientHeight;

window.addEventListener('scroll', function (event) {
  didScroll = true;
});

// $(window).scroll(function(event){
//   didScroll = true;
// });

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = window.pageYOffset | document.body.scrollTop;

  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
    return;

  const footer = document.getElementsByTagName('footer')[0];

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    footer.className = 'nav-up';
  } else {
    // Scroll Up
    const documentHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    if(st + window.screen.height < documentHeight) {
      footer.className = 'nav-down';
    }
  }

  lastScrollTop = st;
}
