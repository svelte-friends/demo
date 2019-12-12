<script>
  import RadioButton from '@packages/shared/radioButton.svelte';
  import BasePage from './components/page.svelte';
  import Code from './components/code.svelte';
  import Title from './components/title.svelte';
  import Example from './components/example.svelte';
  import Table from './components/table.svelte';
  import Text from './components/text.svelte';

  let basicCode = `
    <RadioButton />
    <RadioButton checked />
    <RadioButton label="RadioButton" />
    <RadioButton label="RadioButton" checked />
  `;

  let colorCode = `
    <RadioButton color="red" />
    <RadioButton color="green" checked />
    <RadioButton label="RadioButton" color="grey" checked />
    <RadioButton label="RadioButton" color="red" checked />
  `;

  let disabledCode = `
    <RadioButton color="red" disabled />
    <RadioButton color="green" checked disabled />
    <RadioButton label="RadioButton" color="grey" checked disabled />
    <RadioButton label="RadioButton" color="red" checked disabled />
  `;

  let groupedCode = `
    <script>
      let colors = ['Blue', 'Yellow', 'Red', 'Black'];
      let selected = '';
      function onChange(evt) {
        selected = evt.target.value;
      }
    <\/script>
    <span>Selected: {selected}</span>
    {#each colors as color}
      <RadioButton
        name="colors"
        on:change={onChange}
        {color}
        label={color}
        value={color} />
    {/each}
  `;

  let thead = [
    'Parameter',
    'Description',
    'Type',
    'Optional value',
    'Default value',
  ];

  let tbody = [
    ['name', 'We use to define the name.', 'String', 'no', '--'],
    ['value', 'We use to define a value.', 'String', 'no', '--'],
    ['label', 'We use to define a text.', 'String', 'no', '--'],
    ['checked', 'We use to define if checked.', 'Boolean', 'yes', 'false'],
    ['color', 'We use to define a color.', 'String', 'yes', '#624695'],
    ['disabled', 'We use to define if disabled.', 'Boolean', 'yes', 'false'],
  ];

  let colors = ['Blue', 'Yellow', 'Red', 'Black'];
  let selected = '';
  function onChange(evt) {
    selected = evt.target.value;
  }
</script>

<BasePage>
  <Title size="h2" text="RadioButton" />
  <Text>Provide a radio button for individual selection.</Text>
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />

  <Title size="h4" text="Basic" />
  <Example>
    <RadioButton />
    <RadioButton checked />
    <RadioButton label="RadioButton" />
    <RadioButton label="RadioButton" checked />
  </Example>
  <Code code={basicCode} />

  <Title size="h4" text="Colors" />
  <Example>
    <RadioButton color="red" />
    <RadioButton color="green" checked />
    <RadioButton label="RadioButton" color="grey" checked />
    <RadioButton label="RadioButton" color="red" checked />
  </Example>
  <Code code={colorCode} />

  <Title size="h4" text="Disabled" />
  <Example>
    <RadioButton color="red" disabled />
    <RadioButton color="green" checked disabled />
    <RadioButton label="RadioButton" color="grey" checked disabled />
    <RadioButton label="RadioButton" color="red" checked disabled />
  </Example>
  <Code code={disabledCode} />

  <Title size="h4" text="Grouped" />
  <div class="group">
    <span>Selected: {selected}</span>
    {#each colors as color}
      <RadioButton
        name="colors"
        on:change={onChange}
        {color}
        label={color}
        value={color} />
    {/each}
  </div>
  <Code code={groupedCode} />
</BasePage>
