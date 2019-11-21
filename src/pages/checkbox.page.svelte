<script>
  import CheckBox from '@packages/shared/checkbox.svelte';
  import BasePage from './components/page.svelte';
  import Code from './components/code.svelte';
  import Title from './components/title.svelte';
  import Example from './components/example.svelte';
  import Table from './components/table.svelte';
  import Text from './components/text.svelte';

  let thead = [
    'Parameter',
    'Description',
    'Type',
    'Optional value',
    'Default value',
  ];

  let tbody = [
    ['label', 'We use to define a text.', 'String', 'true', '---'],
    ['checked', 'We use to define if checked.', 'Boolean', 'true', 'false'],
    ['color', 'We use to define a color.', 'String', 'true', '#624695'],
    ['disabled', 'We use to define if disabled.', 'Boolean', 'true', 'false'],
  ];

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

<BasePage>
  <Title size="h2" text="Checkbox" />
  <Text>Provide multiple checkboxes for multiple selections.</Text>
  <Title size="h3" text="Attributes" />

  <Table {thead} {tbody} />

  <Title size="h4" text="Basic" />
  <Example>
    <CheckBox />
    <CheckBox label="Checkbox" checked />
  </Example>
  <Code code={codeDemoBasic} />

  <Title size="h4" text="Colors" />
  <Example>
    <CheckBox label="Checkbox" color="red" />
    <CheckBox label="Checkbox" checked color="red" />
  </Example>
  <Code code={codeDemoColor} />

  <Title size="h4" text="Disabled" />
  <Example>
    <CheckBox label="Disabled" checked disabled />
    <CheckBox label="Disabled" disabled />
  </Example>
  <Code code={codeDemoDisabled} />

</BasePage>
