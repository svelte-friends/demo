<script>
  import Router from 'svelte-spa-router';
  import * as page from './pages';
  let routes = {};

  Object.keys(page).sort().forEach(element => {
    routes = {
      ...routes,
      [`/component/${element}`]: page[element],
    }
  });
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
</style>

<div class="shell">
  <ul class="list">
    {#each Object.keys(routes) as url}
      <li>
        <a href="#{url}">{url.replace(/\/component\//, '')}</a>
      </li>
    {/each}
  </ul>
  <Router {routes} />
</div>
