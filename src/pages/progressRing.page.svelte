<script>
  import ProgressRing from '@packages/shared/progressRing.svelte';
  import BasePage from './components/page.svelte';
  import Code from './components/code.svelte';
  import Title from './components/title.svelte';
  import Example from './components/example.svelte';
  import Table from './components/table.svelte';
  import Text from './components/text.svelte';

  let determinateBasic = `
    <ProgressRing type="determinate" percent={10} />
    <ProgressRing type="determinate" percent={45} />
    <ProgressRing type="determinate" percent={75} />
    <ProgressRing type="determinate" percent={100} />
  `;

  let determinateColor = `
   <ProgressRing type="determinate" percent={10} color="red" colorText="red" />
    <ProgressRing type="determinate" percent={45} color="green" colorText="green" text="Loaging 1" />
    <ProgressRing type="determinate" percent={75} color="blue" colorText="blue" text="Loaging 2" />
    <ProgressRing type="determinate" percent={100} color="grey" colorText="grey" text="Loaging 3" />
  `;

  let determinatesize = `
   <ProgressRing type="determinate" percent={10} color="red" colorText="red" small />
    <ProgressRing type="determinate" percent={45} color="green" colorText="green" big />
    <ProgressRing type="determinate" percent={75} color="blue" colorText="blue" small />
    <ProgressRing type="determinate" percent={100} color="grey" colorText="grey" big />
  `;

  let indeterminateBasic = `
    <ProgressRing />
    <ProgressRing colorText="#675c5ccc" text="Loaging 1" />
    <ProgressRing colorText="#624695" text="Loaging 2" />
    <ProgressRing colorText="grey" text="Loaging 3" />
  `;
  let indeterminateSize = `
    <ProgressRing small />
    <ProgressRing big colorText="#675c5ccc" text="Loaging 1" />
    <ProgressRing big colorText="#624695" text="Loaging 2" />
    <ProgressRing big colorText="grey" text="Loaging 3" />
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
    <ProgressRing type="determinate" percent={10} />
    <ProgressRing type="determinate" percent={45} />
    <ProgressRing type="determinate" percent={75} />
    <ProgressRing type="determinate" percent={100} />
  </Example>
  <Code code={determinateBasic} />

  <Title size="h5" text="Determinate Color" />
  <Example>
    <ProgressRing type="determinate" percent={10} color="red" colorText="red" />
    <ProgressRing
      type="determinate"
      percent={45}
      color="green"
      colorText="green"
      text="Loaging 1" />
    <ProgressRing
      type="determinate"
      percent={75}
      color="blue"
      colorText="blue"
      text="Loaging 2" />
    <ProgressRing
      type="determinate"
      percent={100}
      color="grey"
      colorText="grey"
      text="Loaging 3" />
  </Example>
  <Code code={determinateColor} />

  <Title size="h5" text="Determinate size" />
  <Example>
    <ProgressRing
      type="determinate"
      percent={10}
      color="red"
      colorText="red"
      small />
    <ProgressRing
      type="determinate"
      percent={45}
      color="green"
      colorText="green"
      big />
    <ProgressRing
      type="determinate"
      percent={75}
      color="blue"
      colorText="blue"
      small />
    <ProgressRing
      type="determinate"
      percent={100}
      color="grey"
      colorText="grey"
      big />
  </Example>
  <Code code={determinatesize} />

  <Title size="h5" text="Indeterminate" />
  <Example>
    <ProgressRing />
    <ProgressRing colorText="#675c5ccc" text="Loaging 1" />
    <ProgressRing colorText="#624695" text="Loaging 2" />
    <ProgressRing colorText="grey" text="Loaging 3" />
  </Example>
  <Code code={indeterminateBasic} />

  <Title size="h5" text="Size" />
  <Example>
    <ProgressRing small />
    <ProgressRing big colorText="#675c5ccc" text="Loaging 1" />
    <ProgressRing big colorText="#624695" text="Loaging 2" />
    <ProgressRing big colorText="grey" text="Loaging 3" />
  </Example>
  <Code code={indeterminateSize} />

</BasePage>
