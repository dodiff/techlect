<template>
  <main v-if="exists">
    <article>
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="article in articles"
            :key="article.id"
            @click="popArticlePage(article.link, article.id)"
          >
            <v-list-item-content>
              <v-list-item-title>
                <span class="article-title">{{ article.title }}</span>
                <v-badge
                  color="blue"
                  content="N"
                  offset-x="-3"
                  offset-y="-4"
                  v-if="isRecentArticle(article.authoredOn)"
                />
              </v-list-item-title>
              <v-list-item-subtitle>
                <img
                  class="organization-logo"
                  :src="article.organizationFaviconPath"
                />
                <span class="meta-tag organization">
                  {{ article.organizationName }}
                </span>
                <span class="meta-tag">{{ article.authoredOn }}</span>
                <span class="meta-tag">{{ article.author }}</span>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </article>

    <v-pagination
      v-model="pagination.page"
      :length="pagination.totalPages"
      :total-visible="7"
      @input="onPageChange"
    ></v-pagination>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    articles: [],
    pagination: {
      page: 1,
      totalPages: null,
    },
    exists: null,
  }),
  created() {
    axios.get("/api/articles?page=1").then((res) => {
      this.articles = res.data.content;
      this.pagination.totalPages = res.data.totalPages;
      this.exists = (this.articles.length > 0);
    });
  },
  methods: {
    popArticlePage: function(link, id) {
      window.open(link, "_blank");
      axios
        .post(`/api/articles/hits/${id}`)
        .then((res) => console.log(res));
    },
    onPageChange: function(page) {
      axios
        .get("/api/articles?page=" + page)
        .then((res) => (this.articles = res.data.content));
    },
    isRecentArticle: function(authoredOn) {
      const now = new Date();
      const publishDate = new Date(authoredOn);

      const dateDiff =
        (now.getTime() - publishDate.getTime()) / (1000 * 60 * 60 * 24);
      return dateDiff <= 7;
    },
  },
};
</script>

<style scoped>
main {
  margin: 30px;
}

article {
  margin: 0 200px 15px 200px;
}

.article-title {
  font-size: 1.6rem;
}

.v-badge__badge {
  position: absolute;
}

.v-list-item__content {
  padding: 16px 0;
}

.v-list-item__subtitle {
  margin-top: 5px;
}

.meta-tag {
  margin-right: 7px;
}

.organization {
  font-size: 1.1rem;
}

.organization-logo {
  vertical-align: bottom;
  height: 1.3rem;
  border-radius: 6px;
}

.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}

/* 스마트폰 가로+세로 */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
}

/* 스마트폰 가로 */
@media only screen and (min-width: 321px) {
}

/* 스마트폰 세로 */
@media only screen and (max-width: 320px) {
}

/* iPhone4와 같은 높은 크기 세로 */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (min-device-pixel-ratio: 1.5) {
}

/* iPhone4와 같은 높은 해상도 가로 */
@media only screen and (min-width: 640px) {
}

/* iPad 가로+세로 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* iPad 가로 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
}

/* iPad 세로 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
}

/* 데스크탑 브라우저 가로 */
@media only screen and (min-width: 1224px) {
}

/* 큰 모니터 */
@media only screen and (min-width: 1824px) {
}
</style>
