<template>
  <div id="app">
    <PostForm></PostForm>
    <PostCount></PostCount>
    <h1>{{ countPosts }}</h1>
    <div v-for="post in validPosts" :key="post.id" class="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <button @click="deletePost">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
/** подключаем компонент для создания поста**/
import PostForm from "./components/PostForm";
import PostCount from "./components/PostCount";

export default {
  name: "App",
  components: { PostCount, PostForm },
  comments: {
    PostForm,
    PostCount,
  },
  computed: mapGetters(["validPosts", "countPosts"]),
  methods: {
    ...mapActions(["fetchPosts", "delPost"]),
    deletePost() {
      this.delPost(2);
    },
  },
  async mounted() {
    await this.fetchPosts(4);
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
