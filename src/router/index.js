import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyReposView from "../views/MyReposView.vue";
import RepoView from "@/views/RepoView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: true,
    },
    {
      path: "/repos",
      name: "repos",
      component: MyReposView,
      props: true,
    },
    {
      path: "/repos/:id",
      name: "repo",
      component: RepoView,
      props: true,
    },
    { 
      path: "/:pathMatch(.*)*", 
      name: "not-found", 
      component: NotFoundView,
    },
  ],
});
export default router;
