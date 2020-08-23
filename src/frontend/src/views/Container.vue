<template>
  <main>
    <v-list>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="article in articles"
          :key="article.id"
          :inactive="inactive"
          @click="popArticlePage(article.link, article.id)"
        >
          <v-list-item-avatar v-html="article.organization">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="article.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    articles: [],
  }),
  created() {
    axios
      .get("/api/articles?page=1&size=10")
      .then((res) => (this.articles = res.data.content));
  },
  methods: {
    popArticlePage: function(link, id) {
      window.open(link, "_blank");
      axios
        .post("/api/articles/hits", { id: id })
        .then((res) => console.log(res));
    },
  },
};
</script>

<style scoped>
main {
  margin: 75px;
}
</style>
