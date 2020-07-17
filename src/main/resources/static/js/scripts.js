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

function getArticleImage() {
  const hash = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  const image = new Image;
  image.className = 'article-list__item__image article-list__item__image--loading';
  image.src = 'http://api.adorable.io/avatars/250/' + hash;

  image.onload = function() {
    image.classList.remove('article-list__item__image--loading');
  };

  return image;
}

function getArticleData(data) {
  const author = data.author;
  const title = data.title;
  const articleData = document.createElement('div');
  articleData.appendChild(document.createTextNode(author));
  articleData.appendChild(document.createTextNode(title));
  return articleData;
}

function getArticle(data) {
  const articleData = getArticleData(data);
  const article = document.createElement('article');
  article.className = 'card card-1';
  article.appendChild(articleData);
  return article;
}

function getArticlePage(page) {
  const pageElement = document.createElement('div');
  pageElement.id = getPageId(page);
  pageElement.className = 'article-list__page';

  const request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:8080/api/articles?page=' + page + '&size=12', true)
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const articles = JSON.parse(request.responseText)
        for (const i of articles.content) {
          console.log(i);
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
  addPaginationPage(page);
}

const articleList = document.getElementById('article-list');
const articleListPagination = document.getElementById(
    'article-list-pagination');
let page = 0;

addPage(++page);

window.onscroll = function () {
  if (getScrollTop() < getDocumentHeight() - window.innerHeight) {
    return;
  }
  addPage(++page);
};
