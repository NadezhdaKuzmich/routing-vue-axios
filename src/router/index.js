import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main";
import ProductList from "../views/ProductList";
import Product from "../views/Product";
import Contact from "../views/Contact";

const routes = [
  {
    path: "/",
    name: Main,
    component: Main,
  },
  {
    path: "/products",
    name: ProductList,
    component: ProductList,
  },
  {
    path: "/products/:id",
    name: Product,
    component: Product,
    props: true,
  },
  {
    path: "/contact",
    name: Contact,
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;