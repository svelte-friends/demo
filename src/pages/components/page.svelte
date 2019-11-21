<script>
  let codeDemoBasic = `
   <CheckBox />
   <CheckBox label="Checkbox" checked />
  `;

  let codeDemoColor = `
   <CheckBox label="Checkbox" color="red" />
   <CheckBox label="Checkbox" checked color="red" />
  `;

  let codeDemoDisabled = `
   <CheckBox label="Disabled" checked disabled />
   <CheckBox label="Disabled" disabled />
  `;
</script>

<style>
  .content {
    flex-direction: column;
    padding: 20px;
    width: 100%;
    overflow-y: scroll;
  }
</style>

<div class="content">
  <slot />
</div>
