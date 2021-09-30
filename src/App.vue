<template>
  <div id="app">
    <PostForm></PostForm>
    <h1>{{ countPosts }}</h1>
    <div v-for="post in validPosts" :key="post.id" class="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostForm from "./components/PostForm";
export default {
  name: "App",
  components: { PostForm },
  comments: {
    PostForm,
  },
  computed: mapGetters(["validPosts", "countPosts"]),
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    this.fetchPosts(2);
  },
};
</script>

<style>
#app {
  margin: 60px auto;
  width: 400px;
}

.post {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
