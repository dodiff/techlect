<template>
  <div>
    <ul v-for="article in articles" v-bind:key="article.id">
      {{ article.id }}
      {{ article.organization }}
      {{ article.title }}
      {{ article.author }}
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: [],
    };
  },
  created() {
    axios.get('/api/articles')
    .then(res => this.articles = res.data.content);
  },
};
</script>

<style scoped></style>
