import { createRouter, createWebHistory } from 'vue-router';
import NbaListe from '../views/NbaListe.vue';
import MemeSlideshow from '../views/MemeSlideshow.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/nba',
      name: 'nba',
      component: NbaListe,
    },
    {
      path: '/meme',
      name: 'meme',
      component: MemeSlideshow,
    },
  ],
});

export default router;
