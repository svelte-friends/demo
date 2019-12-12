<script>
  import Router, { location } from 'svelte-spa-router';
  import * as page from './pages';
  let routes = {};

  Object.keys(page)
    .sort()
    .forEach(element => {
      routes = {
        ...routes,
        [`/component/${element}`]: page[element],
      };
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
    height: 40px;
    padding: 0 5px;
    display: flex;
    font-size: 18px;
  }

  .list li:hover {
    background-color: #ff833a;
  }

  .list a {
    text-decoration: none;
    outline: none;
    width: 100%;
    height: 100%;
    line-height: 40px;
    color: rgba(0, 0, 0, 0.65);
  }

  .list a:hover {
    font-weight: 800;
  }

  .active {
    background: #e65100;
  }

  .active a {
    color: #fff;
    font-weight: 800;
  }

  @import './reset.css';
</style>

<div class="shell">
  <ul class="list">
    {#each Object.keys(routes) as url}
      <li class:active={url === $location}>
        <a href="#{url}">{url.replace(/\/component\//, '')}</a>
      </li>
    {/each}
  </ul>
  <Router {routes} />
</div>
