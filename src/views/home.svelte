<script>
  import Button from "@packages/shared/button.svelte";
  import Label from "@packages/shared/label.svelte";
  import Checkbox from "@packages/shared/checkbox.svelte";
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    widows: 100%;
    height: 100%;
  }
  .session-title {
    padding: 20px;
    background-color: #1481c4;
    color: #fff;
    font-size: 18px;
  }

  .session-body {
    padding: 20px;
  }
</style>

<div class="container">
  <div class="session">
    <div class="session-title">
      <h2>Button</h2>
    </div>
    <div class="session-body" >
      <Button />
    </div>
  </div>

  <div class="session">
    <div class="session-title">
      <h2>Label</h2>
    </div>
    <div class="session-body">
      <Label text="Info" />
    </div>
  </div>

  <div class="session">
    <div class="session-title">
      <h2>Checkbox</h2>
    </div>
    <div class="session-body">
      <Checkbox label="Info"/>
    </div>
  </div>
</div>
