<script>
  import ProgressBar from '@packages/shared/progressBar.svelte';
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
    [
      'value',
      'We use to define the percentage of progress, applicable only for the given type.',
      'Integer',
      'false',
      'Min: 0 e Max:100',
    ],
    [
      'backgroundColor',
      'We use to define a color.',
      'String',
      'true',
      'linear-gradient(268deg, #624695, #e1364a)',
    ],
    ['medium', 'We use to set a size.', 'Boolean', 'true', 'false'],
    ['big', 'We use to set a size.', 'Boolean', 'true', 'false'],
    [
      'indeterminate',
      'We use to define the undetermined type.',
      'Boolean',
      'true',
      'false',
    ],
  ];

  let codeDemoBasic = `
      <ProgressBar value="80" />
      <ProgressBar value="50" />
  `;

  let codeDemoColor = `
      <ProgressBar backgroundColor="red" value="25" />
      <ProgressBar backgroundColor="blue" value="50" />
      <ProgressBar backgroundColor="linear-gradient(268deg, yellow, blue)" value="75" />
  `;

  let codeDemoSize = `
      <ProgressBar value=75/>
      <ProgressBar medium value=50/>
      <ProgressBar big value=25/>
  `;

  let codeDemoIndeterminate = `
      <ProgressBar indeterminate/>
  `;

  let codeDemoIndeterminateSize = ` 
      <ProgressBar indeterminate/>
      <ProgressBar indeterminate medium backgroundColor='blue'/>
      <ProgressBar indeterminate big backgroundColor='red'/>
  `;
</script>

<BasePage>
  <Title size="h2" text="Progress Bar" />
  <Text>
    A progress bar can be used to show the user how long he / she is in a
    process.
  </Text>
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />

  <Title size="h5" text="Basic" />
  <Example>
    <ProgressBar value="80" />
  </Example>
  <Example>
    <ProgressBar value="50" />
  </Example>
  <Code code={codeDemoBasic} />

  <Title size="h4" text="Colors" />
  <Example>
    <ProgressBar backgroundColor="red" value="25" />
  </Example>
  <Example>
    <ProgressBar backgroundColor="blue" value="50" />
  </Example>
  <Example>
    <ProgressBar
      backgroundColor="linear-gradient(268deg, yellow, blue)"
      value="75" />
  </Example>
  <Code code={codeDemoColor} />

  <Title size="h4" text="Size" />
  <Example>
    <ProgressBar value="75" />
  </Example>
  <Example>
    <ProgressBar medium value="50" />
  </Example>
  <Example>
    <ProgressBar big value="25" />
  </Example>
  <Code code={codeDemoSize} />

  <Title size="h4" text="Indeterminate" />
  <Example>
    <ProgressBar indeterminate />
  </Example>
  <Code code={codeDemoIndeterminate} />

  <Title size="h4" text="Indeterminate size" />
  <Example>
    <ProgressBar indeterminate />
  </Example>
  <Example>
    <ProgressBar indeterminate medium backgroundColor="blue" />
  </Example>
  <Example>
    <ProgressBar indeterminate big backgroundColor="red" />
  </Example>
  <Code code={codeDemoIndeterminateSize} />

</BasePage>
