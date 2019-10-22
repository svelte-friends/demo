<script>
  import Button from "@packages/shared/button.svelte";
  import Label from "@packages/shared/label.svelte"
</script>
<style>
  h2 {
    padding: 20px;
    padding-bottom: 10px;
    background-color: #1481c4;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
  <h2>Button example</h2>
  <Button />

  <h2>Label example</h2>
  <Label text={'Danger'} />