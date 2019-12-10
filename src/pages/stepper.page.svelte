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
  let codeDemoIcon = `
  <Stepper let:step steps = {[
    { label: 'Address', done: false, icon: house },
    { label: 'Payment', done: false, icon: money},
    ]}>
      <span class="icon" style="width: 50px" slot="icon">
        {@html step.done ? done : step.icon}
      </span>
  </Stepper>
  
   <Stepper let:step steps = {[
    { label: 'STEP 1', done: true, icon: money },
    { label: 'STEP 2', done: true, icon: money },
    { label: 'STEP 3', done: false, icon: medical },
    { label: 'STEP 4', done: false, icon: contact },
    ]}>
      <span class="icon" style="width: 50px" slot="icon">
        {@html step.done ? done : step.icon}
      </span>
  </Stepper>
  `;

  let contact = `<svg viewBox="0 0 512 512"><path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm0 62.4c34.3 0 62.4 28.1 62.4 62.4s-28.1 62.4-62.4 62.4-62.4-28.1-62.4-62.4 28.1-62.4 62.4-62.4zm0 300.4c-52 0-97.8-27-124.8-66.6 1-41.6 83.2-64.5 124.8-64.5s123.8 22.9 124.8 64.5c-27 39.5-72.8 66.6-124.8 66.6z"/></svg>`;
  let medical = `<svg viewBox="0 0 512 512"><path d="M430.3 174.3l-16.5-28.6c-4.3-7.4-13.8-10-21.2-5.7L294 197c-2.7 1.5-6-.4-6-3.5v-114c0-8.6-6.9-15.5-15.5-15.5h-33c-8.6 0-15.5 6.9-15.5 15.5v114.1c0 3.1-3.3 5-6 3.5l-98.6-57c-7.4-4.3-16.9-1.7-21.2 5.7l-16.5 28.6c-4.3 7.4-1.7 16.9 5.7 21.1l98.7 57.1c2.7 1.5 2.7 5.4 0 6.9l-98.7 57.1c-7.4 4.3-9.9 13.7-5.7 21.1l16.5 28.6c4.3 7.4 13.8 10 21.2 5.7l98.6-57c2.7-1.5 6 .4 6 3.5v114.1c0 8.6 6.9 15.5 15.5 15.5h33c8.6 0 15.5-6.9 15.5-15.5V318.4c0-3.1 3.4-5 6-3.5l98.6 57c7.4 4.3 16.9 1.7 21.2-5.7l16.5-28.6c4.3-7.4 1.7-16.9-5.7-21.1l-98.7-57.1c-2.7-1.5-2.7-5.4 0-6.9l98.7-57.1c7.4-4.2 9.9-13.7 5.7-21.1z"/></svg>`;
  let done  = `<svg viewBox="0 0 512 512"><path d="M170.718 216.482L141.6 245.6l93.6 93.6 208-208-29.118-29.118L235.2 279.918l-64.482-63.436zM422.4 256c0 91.518-74.883 166.4-166.4 166.4S89.6 347.518 89.6 256 164.482 89.6 256 89.6c15.6 0 31.2 2.082 45.764 6.241L334 63.6C310.082 53.2 284.082 48 256 48 141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208h-41.6z"/></svg>`
  let house = `<svg viewBox="0 0 500 500"><path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z"/></svg>`;
	let money = `<svg viewBox="0 0 512 512"><path d="M435.2 80H76.8c-24.9 0-44.6 19.6-44.6 44L32 388c0 24.4 19.9 44 44.8 44h358.4c24.9 0 44.8-19.6 44.8-44V124c0-24.4-19.9-44-44.8-44zm0 308H76.8V256h358.4v132zm0-220H76.8v-44h358.4v44z"/></svg>`;
  
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
  
  <Title size="h4" text="Icon" />
  <Example>
    <Stepper let:step steps = {[
    { label: 'Address', done: false, icon: house },
    { label: 'Payment', done: false, icon: money},
    ]}>
      <span class="icon" style="width: 50px" slot="icon">
        {@html step.done ? done : step.icon}
      </span>
    </Stepper>
  </Example>

  <Example>
    <Stepper let:step steps = {[
    { label: 'STEP 1', done: true, icon: money },
    { label: 'STEP 2', done: true, icon: money },
    { label: 'STEP 3', done: false, icon: medical },
    { label: 'STEP 4', done: false, icon: contact },
    ]}>
      <span class="icon" style="width: 50px" slot="icon">
        {@html step.done ? done : step.icon}
      </span>
    </Stepper>
  </Example>
  <Code code={codeDemoIcon} />
</BasePage>
