import Home from './routes/Home.svelte';
import Blog from './routes/Blog.svelte';
import Article from './routes/Article.svelte';
import Private from './routes/Private.svelte';
import Login from './routes/Login.svelte';
import Error from './routes/Error.svelte';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/blog',
    component: Blog,
  },
  {
    path: '/blog/:id',
    component: Article,
  },
  {
    path: '/private',
    component: Private,
    auth: true,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '*',
    component: Error,
  },
];
