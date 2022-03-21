import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormStudentView from "../views/FormStudentView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cadastrar",
    name: "FormStudentView",
    component: FormStudentView,
  },
  {
    path: "/update/:id",
    name: "FormStudentView",
    component: FormStudentView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
