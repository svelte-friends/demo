<script>
  import Switch from '@packages/shared/switch.svelte';
  import BasePage from './components/page.svelte';
  import Code from './components/code.svelte';
  import Title from './components/title.svelte';
  import Example from './components/example.svelte';
  import Table from './components/table.svelte';
  import Text from './components/text.svelte';

  let codeDemoBasic = `
    <Switch />
    <Switch on />
  `;

  let codeDemoColor = `
     <Switch color="grey" on />
     <Switch buttonColor="grey" on /> 
  `;

  let codeDemoDisabled = `
     <Switch disabled />
     <Switch disabled on />
  `;

  let thead = [
    'Parameter',
    'Description',
    'Type',
    'Optional value',
    'Default value',
  ];

  let tbody = [
    [
      'on',
      'We use to define enabled or not enabled',
      'Boolean',
      'true',
      'false',
    ],
    [
      'color',
      'We use to define a color for text.',
      'String',
      'true',
      '#b1d660',
    ],
    [
      'buttonColor',
      'We use to define a color in button.',
      'String',
      'true',
      '#e0fe9f',
    ],
    ['disabled', 'We use to define if desabled.', 'Boolean', 'true', 'false'],
  ];
</script>

<BasePage>
  <Title size="h2" text="Switch" />
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />

  <Title size="h5" text="Basic" />
  <Example>
    <Switch />
    <Switch on />
  </Example>
  <Code code={codeDemoBasic} />

  <Title size="h5" text="Colors" />
  <Example>
    <Switch color="grey" on />
    <Switch buttonColor="grey" on />
  </Example>
  <Code code={codeDemoColor} />

  <Title size="h5" text="Disabled" />
  <Example>
    <Switch disabled />
    <Switch disabled on />
  </Example>
  <Code code={codeDemoDisabled} />

</BasePage>
