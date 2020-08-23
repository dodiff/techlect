<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      <div class="d-flex align-center">
        <v-img
          alt="zingoworks Logo"
          class="shrink mr-2"
          contain
          src="./assets/z.png"
          transition="scale-transition"
          width="40"
        />
        <h1 class="mr-2">techlect.</h1>
      </div>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/zingoworks" target="_blank" text>
        <span class="mr-2">@zingoworks</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Container />
    </v-main>
  </v-app>
</template>

<script>
import Container from "./views/Container";

export default {
  name: "App",

  components: {
    Container,
  },
};
</script>
