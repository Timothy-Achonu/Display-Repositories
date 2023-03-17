<template>
  <div>
    <Navbar />
    <RouterView :page="page" :repos="repos" @update="updatePage" />
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components : {
    Navbar,
  },
  data() {
    return {
      repos: [],
      page: 1,
      num: 8,
    };
  },
  methods: {
    getRepos() {
      axios
        .get(
          `https://api.github.com/users/Timothy-Achonu/repos?page=${this.page}&per_page=10`
        )
        .then((response) => {
          this.repos = response.data;
        });
    },
    updatePage(value) {
      this.page = Number(value.target.textContent)
   }
  },
  created() {
    this.getRepos();
  },
  watch: {
    page() {
    this.getRepos()
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
