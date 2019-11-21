<script>
  import Router from 'svelte-spa-router';
  import * as page from './pages';

  const routes = {
    '/components/button': page.Button,
    '/components/checkbox': page.Checkbox,
    '/components/switch': page.Switch,
    '/components/progressRing': page.ProgressRing,

  };

  const urlList = Object.keys(routes).map(item => ({
    name: item.replace(/\/components\//, ''),
    path: item,
  }));
</script>

<style>
  :root {
    --text-font-family: 'Poppins', sans-serif;
  }

  :global(html, body) {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .shell {
    display: flex;
    height: 100%;
  }

  .list {
    height: 100%;
    width: 20%;
    background-color: #cecece;
    overflow-y: auto;
  }

  .list li {
    margin: 0;
    padding: 5px;
  }

  .list a {
    text-transform: capitalize;
    text-decoration: none;
    outline: none;
    color: rgba(0, 0, 0, 0.65);
  }

  .list a:hover {
    font-weight: 800;
  }

  @import './reset.css';
  @import './pages/style.css';
</style>

<div class="shell">
  <ul class="list">
    {#each urlList as url}
      <li>
        <a href="#{url.path}">{url.name}</a>
      </li>
    {/each}
  </ul>
  <Router {routes} />
</div>
