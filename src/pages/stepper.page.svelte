<script>
  import Stepper from '@packages/shared/stepper.svelte';
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
    ['labelColor', 'we use to set a color for the label.', 'String', 'Yes', '#6f6f6f'],
    ['doneColor', 'we use to set a color for done.', 'String', 'Yes', '#624695'],
    ['stepColor', 'we use to set a color for the step.', 'String', 'Yes', '#ccc'],
    ['numberColor', 'we use to set a color for the number.', 'String', 'Yes', '#6f6f6f'],
    ['steps', 'we use to define the elements.', 'Array<String>', 'No', ''],

  ];

  let codeDemoBasic = `
  <Stepper />
  <Stepper  steps = {[
    { label: 'STEP 1', done: true },
    { label: 'STEP 2', done: true },
    { label: 'STEP 3', done: false },
    ]}/>
  `;

  let codeDemoColor = `
  <Stepper labelColor="black" doneColor="#3CB371" stepColor="#f44336" numberColor="#fff" steps = {[
    { label: 'Tipo de teste', done: true},
    { label: 'Recurso da câmera', done: true},
    { label: 'Configuração do ambiente', done: false},
    ]}/>
  `;

</script>


<BasePage>
  <Title size="h2" text="Stepper" />
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />

  <Title size="h4" text="Basic" />
  <Example><Stepper /></Example>
  <Example>
    <Stepper  steps = {[
    { label: 'STEP 1', done: true },
    { label: 'STEP 2', done: true },
    { label: 'STEP 3', done: false },
    ]}/>
  </Example>
  <Code code={codeDemoBasic} />

  <Title size="h4" text="Colors" />
  <Example>
    <Stepper labelColor="black" doneColor="#3CB371" stepColor="#f44336" numberColor="#fff" steps = {[
    { label: 'Tipo de teste', done: true},
    { label: 'Recurso da câmera', done: true},
    { label: 'Configuração do ambiente', done: false},
    ]}/>
  </Example>
  <Code code={codeDemoColor} />
</BasePage>
