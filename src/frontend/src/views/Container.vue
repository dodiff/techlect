<template>
  <main>
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
                <span class="meta-tag organization">{{ article.organization }}</span>
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
  }),
  created() {
    axios.get("/api/articles?page=1").then((res) => {
      this.articles = res.data.content;
      this.pagination.totalPages = res.data.totalPages;
    });
  },
  watch: {
    "pagination.page": (newPage) => {
      this.onPageChange(newPage);
    },
  },
  methods: {
    popArticlePage: function(link, id) {
      window.open(link, "_blank");
      axios
        .post("/api/articles/hits", { id: id })
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
    getOrganizationLogo: function(organization) {
      console.log(organization);

      return "@/assets/logos/kakao.png";
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

.meta-tag {
  margin-right: 7px;
}

.organization {
  font-size: 1.1rem;
}
</style>
