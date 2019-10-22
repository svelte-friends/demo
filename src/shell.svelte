<script>
  /** Imports */
  import Router from "svelte-spa-router";
  import { Home } from "./views";

  const routes = {
    "/": Home
  };
</script>

<style>
  :root {
    --var-color-primary: orange;
    --var-color-red: #fb4949;
    --var-color-yellow: #ffeb00;
    --var-color-green: #00e358;
    --var-color-purple: #624695;
    --text-color-white: #ffffff;
    --text-font-family: "Poppins", sans-serif;
  }

  :global(html, body, .shell) {
    height: 100%;
    width: 100%;
    font-family: "Open Sans", Tahoma, Geneva, Verdana, sans-serif;
    font-family: var(--text-font-family);
  }
  @import "./reset.css";
</style>

<!-- Simulate a Shell Architecture -->
<div class="shell">
  <div class="container">
    <Router {routes} />
  </div>
</div>
