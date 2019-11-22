<script>
  import Label from '@packages/shared/label.svelte';
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
    ['text', 'We use to define a text.', 'String', 'false', 'Label'],
    ['color', 'We use to define a color.', 'String', 'true', '#624695'],
    ['type', 'We use to define a type.', 'String', 'true', 'fill or outline'],
  ];

  let codeDemoBasic = `
    <Label />
    <Label text="One" />
  `;

  let codeDemoColor = `
    <Label color="blue" />
    <Label color="green" />
    <Label type="outline" color="red" />
  `;

  let codeDemoSize = `
    <Label />
    <Label type="outline"/>
  `;
</script>

<BasePage>
  <Title size="h2" text="Label" />
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />

  <Title size="h4" text="Basic" />
  <Example>
    <Label />
    <Label text="One" />
  </Example>
  <Code code={codeDemoBasic} />

  <Title size="h4" text="Colors" />
  <Example>
    <Label color="blue" />
    <Label color="green" />
    <Label type="outline" color="red" />
  </Example>
  <Code code={codeDemoColor} />

  <Title size="h4" text="Type" />
  <Example>
    <Label />
    <Label type="outline" />
  </Example>
  <Code code={codeDemoSize} />

</BasePage>
