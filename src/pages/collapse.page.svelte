<script>
  import Collapse from '@packages/shared/collapse.svelte';
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
    ['label', 'Define a text', 'String', 'no', ''],
    ['color', 'Define a color button', 'Parameter', 'yes', '#fff'],
  ];

  let codeDemoBasic = `
    <Collapse />
    <Collapse label="Regras de Uso">
      <div style="background-color: #fff">
        <h1>Hello!</h1>
        <p>Any message</p>
      </div>
    </Collapse>
    <Collapse label="Sample">
      <div style="background-color: #fff">Hello!</div>
    </Collapse>
  `;

  let codeDemoColor = `
    <Collapse color="#007bff" />
    <Collapse label="Regras de Uso" color="#20c997">
      <div style="background-color: #f8f9fa">
        <h1>Hello!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat
          ultrices dolor nec venenatis. Cras ultrices, erat ut blandit accumsan.
        </p>
      </div>
    </Collapse>
    <Collapse label="Sample" color="#ffc107">
      <div style="background-color: #fff">Hello!</div>
    </Collapse>
  `;
</script>

<BasePage>
  <Title size="h2" text="Collapse Expand" />
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />

  <Title size="h4" text="Basic" />
  <Example>
    <Collapse />
    <Collapse label="Regras de Uso">
      <div style="background-color: #fff">
        <h1>Hello!</h1>
        <p>Any message</p>
      </div>
    </Collapse>
    <Collapse label="Sample">
      <div style="background-color: #fff">Hello!</div>
    </Collapse>
  </Example>
  <Code code={codeDemoBasic} />

  <Title size="h4" text="Colors" />
  <Example>
    <Collapse color="#007bff" />
    <Collapse label="Regras de Uso" color="#20c997">
      <div style="background-color: #f8f9fa">
        <h1>Hello!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat
          ultrices dolor nec venenatis. Cras ultrices, erat ut blandit accumsan.
        </p>
      </div>
    </Collapse>
    <Collapse label="Sample" color="#ffc107">
      <div style="background-color: #fff">Hello!</div>
    </Collapse>
  </Example>
  <Code code={codeDemoColor} />

</BasePage>
