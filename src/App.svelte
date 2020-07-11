<script>
  import router from 'page';

  // Include our Routes
  import Home from './routes/Home.svelte';
  import Blog from './routes/Blog.svelte';
  import SingleBlog from './routes/SingleBlog.svelte';

  // Variables
  let page;
  let params;

  // Set up the pages to watch for
  router('/', () => (page = Home));
  router('/blog', () => (page = Blog));
  router(
    '/blog/:id',
    // Before we set the component
    (ctx, next) => {
      params = ctx.params;
      next();
    },
    // Finally set the component
    () => (page = SingleBlog)
  );

  // Set up the router to start and actively watch for changes
  router.start();
</script>

<nav>
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
</nav>

<main>
  <svelte:component this="{page}" params="{params}" />
</main>
