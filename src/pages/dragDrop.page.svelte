<script>
  import DragDrop from '@packages/shared/dragDrop.svelte';
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
      'backgroundColor', 
      'Define a color for the background.', 
      'String', 
      'true', 
      '#fff'
    ],
    [
      'labelColor',
      'We use to define a color for text.',
      'String',
      'True',
      '#1a051d',
    ],
    [
      'activeColor',
      'Define a color for the background active	',
      'String',
      'True',
      '#fff',
    ],
  ];

  let codeDemoBasic = `
    <DragDrop />
    <DragDrop items = {[
      { label: 'Intimidade' },
      { label: 'Tempo' },
      { label: 'Zero' },
      { label: 'Old town road' },
    ]}/>
  `;

  let codeDemoColor = `
    <DragDrop backgroundColor="#33b5e5" labelColor="white" activeColor="#007bff" items = {[
      { label: 'Intimidade' },
      { label: 'Tempo' },
      { label: 'Zero' },
      { label: 'Old town road' },
    ]}/>

    <DragDrop backgroundColor="#fd7e14" labelColor="#343a40" activeColor="#fff" items = {[
      { label: 'item 1' },
      { label: 'item 2' },
      { label: 'item 3' },
      { label: 'item 4' },
      { label: 'item 5' },
      { label: 'item 6' },
    ]}/>
  `;

</script>

<BasePage>
  <Title size="h2" text="Drag and Drop" />
  <Table {thead} {tbody} />
  <Title size="h4" text="Basic" />
  <Example>
    <DragDrop />
    <DragDrop items = {[
      { label: 'Intimidade' },
      { label: 'Tempo' },
      { label: 'Zero' },
      { label: 'Old town road' },
    ]}/>
  </Example>
  <Code code={codeDemoBasic} />

  <Title size="h4" text="Colors" />
  <Example>
    <DragDrop backgroundColor="#33b5e5" labelColor="white" activeColor="#007bff" items = {[
      { label: 'Intimidade' },
      { label: 'Tempo' },
      { label: 'Zero' },
      { label: 'Old town road' },
    ]}/>
  </Example>

  <Example>
    <DragDrop backgroundColor="#fd7e14" labelColor="#343a40" activeColor="#fff" items = {[
      { label: 'item 1' },
      { label: 'item 2' },
      { label: 'item 3' },
      { label: 'item 4' },
      { label: 'item 5' },
      { label: 'item 6' },
    ]}/>
  </Example>
  <Code code={codeDemoColor} />

</BasePage>
