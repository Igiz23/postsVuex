<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="Enter count post" v-model="count" />
    <button type="submit">OK</button>
    <hr />
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PostCount",
  data() {
    return {
      count: "",
      limit: 0,
    };
  },
  methods: {
    ...mapActions(["fetchPosts"]),
    submit() {
      this.limit = Number(this.count);
      this.count = "";
    },
  },
};
</script>

<style scoped></style>
