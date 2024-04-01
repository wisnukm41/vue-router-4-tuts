import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Movies from '../views/Movies.vue'

// Lazy load component
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Movies = () => import('../views/Movies.vue')
const MovieDetails = () => import('../views/MovieDetails.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/movies', component: Movies },
  { path: '/movies/:id', component: MovieDetails, name: "MovieDetails", props: true },
  { path: '/:pathMatch(.*)*', component: NotFound, name: "NotFound"},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;