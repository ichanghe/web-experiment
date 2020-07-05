import Vue from "vue";
import Router from "vue-router";

import Apage from "../views/a.vue";
import Bpage from "../views/b.vue";
import Cpage from "../views/c.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "A",
      component: Apage,
      meta:{
        keepAlive: true,
        useCache:false
      }
    },
    {
      path: "/bpage",
      name: "B",
      component: Bpage,
      meta: {
        keepAlive: true,
        useCache:false
      }
    },
    {
      path: "/cpage",
      name: "C",
      component: Cpage,
      meta:{
        keepAlive: true,
        useCache:false
      }
    }
  ]
});
