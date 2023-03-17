<template>
  <div> 
   <div v-if="paramsID">
    <div class="repo-container">
      <h2>{{ repo.name }}</h2>
      <hr />
      <h3 v-if="repo.fork">A Forked Repo</h3>
      <div class="live-links">
        <a v-if="repo.homepage" :href="`${repo.homepage}`" target="_blank"
          >Live site</a
        >
        <a :href="`${repo.html_url}`" target="_blank">Github Repo</a>
      </div>
      <div class="description">
        <h3>Description</h3>
        <p v-if="!repo.description">No Description</p>
        <p v-if="repo.description">{{ repo.description }}</p>
      </div>
      <div class="date-created">
        <h3>Date Created</h3>
        <p>{{ getDateCreated() }}</p>
      </div>
    </div>
  </div>
  <div v-else> 
      <h1>...Loading</h1>
  </div>
</div>
</template>

<script setup>
import { onMounted, ref, defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
  repos: Object,
});
const repos = ref(props.repos);

let paramsID = ref("");
let repo = ref({ name: "Hippo" });
onMounted(async () => {
  await router.isReady();
  paramsID.value = route.params.id;
  repo.value = repos.value[parseInt(paramsID.value - 1)];
});

const getDateCreated = () => {
  const date = repo.value.created_at.substring(0, 10);
  let month;
  let day = date.substring(date.length - 2, date.length);
  let year = date.substring(0, 4);
  const type = date.substring(5, 7);
  switch (type) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "Febraury";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    default:
      month = "December";
  }
  if (day == "01") {
    return `1st ${month} ${year}`;
  } else if (day == "02") {
    return `2nd ${month} ${year}`;
  } else if (day == "03") {
    return `2rd ${month} ${year}`;
  } else {
    if (Number(day) >= 10) {
      return `${day}th ${month} ${year}`;
    } else {
      return `${day.substring(1)}th ${month} ${year}`;
    }
  }
};
</script>

<style scoped>
.repo-container {
  background: rgba(21, 38, 27, 0.7);
  width: 85%;
  min-height: 65vh;
  margin: 0 auto;
  margin-top: 20px;
  padding: 15px;
}
h1 {
  text-align: center;
}
.repo-container > h2 {
  text-align: center;
}
h3 {
  text-align: center;
}
div {
  margin-top: 20px;
}
.live-links {
  display: flex;
  justify-content: center;
   background: rgba(255, 255, 255, 0.5);
   padding:10px 20px;
   border-radius: 15px;
}
.live-links a {
  background: white;
  color: black;
  margin: 0 5px;
  padding: 10px;
  border-radius:15px;
}
.description {
  text-align: center;
}
.date-created {
  text-align: center;
}
</style>
