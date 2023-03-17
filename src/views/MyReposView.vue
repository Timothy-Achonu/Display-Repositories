<template>
  <div>
    <div v-if="repos.length">
      <div class="repos">
        <div v-for="(repo, index) in repos" :key="repo.id" class="repo">
          <h2>{{ repoNum(index) }}</h2>
          <hr />
          <div class="repoName">{{ repo.name }}</div>
          <RouterLink :to="`repos/${index + 1}`">View more</RouterLink>
          <!-- <RouterLink to="repos/1">View more</RouterLink> -->
        </div>
      </div>
      <div class="buttons-wrapper">
        <button
          @click="$emit('update', $event)"
          :class="page == 1 ? 'current' : ''"
        >
          1
        </button>
        <button
          @click="$emit('update', $event)"
          :class="page == 2 ? 'current' : ''"
        >
          2
        </button>
        <button
          @click="$emit('update', $event)"
          :class="page == 3 ? 'current' : ''"
        >
          3
        </button>
        <button
          @click="$emit('update', $event)"
          :class="page == 4 ? 'current' : ''"
        >
          4
        </button>
        <button
          @click="$emit('update', $event)"
          :class="page == 5 ? 'current' : ''"
        >
          5
        </button>
      </div>
    </div>
    <div v-else>
       <h1>...Loading</h1>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: "MyRepos",
  props: {
    page: {
      type: Number,
      required: true,
    },
    repos: {
      type: Object,
      required: true,
    },
  },
  emits: ["update"],
  data() {
    return {};
  },
  methods: {
    repoNum(index) {
      if (this.page === 1) {
        return index + 1;
      } else {
        return (this.page - 1) * 10 + (index + 1);
      }
    },
  },
};
</script>

<style scoped>
.repos {
  display: flex;
  flex-wrap: wrap;
  max-height: 75vh;
  overflow-y: scroll;
  justify-content: center;
  border-bottom: 1px white solid;
  margin: 0 20px;
}
.repos::-webkit-scrollbar {
  width: 0.7em;
}
 
.repos::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
}
.repos::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  border-radius: 20px;
}
.repo {
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 250px;
  text-align: center;
  background: rgba(21, 38, 27, 0.7);
  color: white;
  padding: 20px;
  margin: 20px;
  cursor: pointer;
}
.repoName {
  /* height: 100px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
a {
  background: rgba(222, 184, 135, 1);
  color: black;
  text-decoration: none;
  padding: 10px;
  border-radius: 25px;
  cursor: pointer;
}
.buttons-wrapper {
  display: flex;
  width: 65vw;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 20px;
}
.buttons-wrapper > button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: white;
  color: black;
}
.buttons-wrapper > .current {
  background: rgba(21, 38, 27, 0.7);
  color: white;
  pointer-events: none;
}

</style>
