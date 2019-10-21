<script>
  /** Imports */
  import Router from "svelte-spa-router";
  import { Home } from "./views";

  const routes = {
    "/": Home,
  };
</script>

<style>
  :root {
    --var-color-primary: orange;
  }

  :global(html, body, .shell) {
    height: 100%;
    width: 100%;
    font-family: "Open Sans", Tahoma, Geneva, Verdana, sans-serif;
  }
  .shell {
    color: aliceblue; /** TODO: remove */
    background: #363636;
    overflow: hidden;
  }

  @import "./reset.css";
</style>

<!-- Simulate a Shell Architecture -->
<div class="shell">
  <div class="container">
    <Router {routes} />
  </div>
</div>
