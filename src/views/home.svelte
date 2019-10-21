<script>
  import Button from "@packages/shared/button.svelte";
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }
</style>

<div class="container">
  <h1>Demo component</h1>
  <Button />
  <img
    width="50%"
    style="padding:20px"
    src="https://svelte.dev/svelte-logo-outline.svg"
    alt="Svelte logo" />
</div>
