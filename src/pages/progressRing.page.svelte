<script>
  import ProgressRing from '@packages/shared/progressRing.svelte';
  import BasePage from './components/page.svelte';
  import Code from './components/code.svelte';
  import Title from './components/title.svelte';
  import Example from './components/example.svelte';
  import Table from './components/table.svelte';
  import Text from './components/text.svelte';

  let codeDemoBasic = `
  <ProgressRing />
  <ProgressRing text="Loading file..." />

  `;

  let codeDemoSize = `
   <ProgressRing small/>
   <ProgressRing big/>
  `;

  let codeDemoDeterminate = `
  <ProgressRing type="determinate" percent={100} color="red" colorText="red" small />
  <ProgressRing type="determinate" percent={60} color="green" colorText="green" big />
  `;

  let thead = [
    'Parameter',
    'Description',
    'Type',
    'Optional value',
    'Default value',
  ];

  let tbody = [
    ['small', 'We use to define a size.', 'Boolean', 'true', 'false'],
    ['big', 'We use to define a size.', 'Boolean', 'true', 'false'],
    ['text', 'We use to define a text.', 'String', 'true', 'Loading'],
    [
      'colorText',
      'We use to define a color for text.',
      'String',
      'true',
      '#0b0e1e',
    ],
    [
      'color',
      'We use to define a color for progress.',
      'String',
      'true',
      '#624695',
    ],
    [
      'type',
      'We use to define a type. indeterminate or determinate.',
      'String',
      'true',
      'indeterminate',
    ],
    [
      'percent',
      'We use to define the percent for progress, only applicable for determinate type.',
      'Integer',
      'false',
      'Min: 0 and Max: 100',
    ],
  ];
</script>

<BasePage>
  <Title size="h2" text="Progress Ring" />
  <Text>Progress component use to load in your pages.</Text>
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />

  <Title size="h5" text="Determinate" />
  <Example>
    <ProgressRing
      type="determinate"
      percent={100}
      color="red"
      colorText="red"
      small />
    <ProgressRing
      type="determinate"
      percent={60}
      color="green"
      colorText="green"
      big />
  </Example>
  <Code code={codeDemoDeterminate} />

  <Title size="h5" text="Indeterminate" />
  <Example>
    <ProgressRing />
    <ProgressRing text="Loading file..." />
  </Example>
  <Code code={codeDemoBasic} />

  <Title size="h5" text="Size" />
  <Example>
    <ProgressRing small />
    <ProgressRing big colorText="#675c5ccc" text="Loaging..." />
  </Example>
  <Code code={codeDemoSize} />

</BasePage>
