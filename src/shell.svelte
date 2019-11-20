<script>
  import Router from 'svelte-spa-router';
  import * as page from './pages';

  const routes = {
    '/components/button': page.Button,
    '/components/checkbox': page.Checkbox,
  };
</script>

<style>
  :root {
    --text-font-family: 'Poppins', sans-serif;
  }

  :global(html, body) {
    width: 100%;
    height: 100%;
  }

  @import './reset.css';
  

  .shell {
    display: flex;
    height: 100%;
  }

  .list {
    height: 100%;
    width: 20%;
    background-color: #cecece;
  }
  
  @import './pages/style.css';
</style>

<div class="shell">
  <ul class="list">
    {#each Object.keys(routes) as route}
      <li><a href="#{route}">{route}</a></li>
    {/each}
  </ul>
  <Router {routes} />
</div>
