<script>
  import RadioButton from '@packages/shared/radioButton.svelte';
  import BasePage from './components/page.svelte';
  import Code from './components/code.svelte';
  import Title from './components/title.svelte';
  import Example from './components/example.svelte';
  import Table from './components/table.svelte';
  import Text from './components/text.svelte';

  let codeDemoBasic = `
   <RadioButton />
   <RadioButton label="Radio checked" checked />
  `;

  let codeDemoColor = `
   <RadioButton label="Radio red" color="red" />
   <RadioButton label="Radio red" color="red" checked />
  `;

  let codeDemoDisabled = `
   <RadioButton label="Disabled" color="red" disabled />
  <RadioButton label="Disabled" disabled checked />
  `;

  let thead = [
    'Parameter',
    'Description',
    'Type',
    'Optional value',
    'Default value',
  ];

  let tbody = [
    ['name', 'We use to define the name.', 'String', 'true', 'undefined'],
    [
      'value',
      'We use to define a value.',
      'String / integer',
      'true',
      'undefined',
    ],
    ['label', 'We use to define a text.', 'String', 'true', '---'],
    ['checked', 'We use to define if checked.', 'Boolean', 'true', 'false'],
    ['color', 'We use to define a color.', 'String', 'true', '#624695'],
    ['disabled', 'We use to define if disabled.', 'Boolean', 'true', 'false'],
  ];
</script>

<BasePage>
  <Title size="h2" text="Radio" />
  <Text>Provide a radio button for individual selection.</Text>
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />

  <Title size="h5" text="Basic" />
  <Example>
    <RadioButton />
    <RadioButton label="Radio checked" checked />
  </Example>
  <Code code={codeDemoBasic} />

  <Title size="h5" text="Colors" />
  <Example>
    <RadioButton label="Radio red" color="red" />
    <RadioButton label="Radio red" color="red" checked />
  </Example>
  <Code code={codeDemoColor} />

  <Title size="h5" text="Disabled" />
  <Example>
    <RadioButton label="Disabled" color="red" disabled />
    <RadioButton label="Disabled" disabled checked />
  </Example>
  <Code code={codeDemoDisabled} />

</BasePage>
