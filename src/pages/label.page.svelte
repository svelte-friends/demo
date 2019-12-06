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
    ['colorLabel', 'We use to define a color.', 'String', 'true', '#624695'],
    ['outline', 'We use to define the outline.', 'Parameter', 'true', ''],
  ];

  let codeDemoBasic = `
    <Label />
    <Label text = Sample/>
    <Label text = TEXT/>
  `;

  let codeDemoColor = `
    <Label colorLabel = "blue"/>
    <Label colorLabel = "green" text = "Sample"/>
    <Label colorLabel =" red" text = "TEXT"/>
  `;

  let codeDemoSize = `
    <Label outline/>
    <Label outline text= "Sample"/>
    <Label outline text= "TEXT"/>
  `;

  let codeOutlineColor = `
    <Label outline colorLabel = "red"/>
    <Label outline text="Sample" colorLabel = "#00e358"/>
    <Label outline text="TEXT" colorLabel = "black"/>
  `;
</script>

<BasePage>
  <Title size="h2" text="Label" />
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />

  <Title size="h4" text="Basic" />
  <Example>
    <Label />
    <Label text = Sample/>
    <Label text = TEXT/>
  </Example>
  <Code code={codeDemoBasic} />

  <Title size="h4" text="Colors" />
  <Example>
    <Label colorLabel ="blue"/>
    <Label colorLabel ="green" text="Sample"/>
    <Label colorLabel="red" text="TEXT"/>
  </Example>
  <Code code={codeDemoColor} />

  <Title size="h4" text="Outline" />
  <Example>
    <Label outline/>
    <Label outline text="Sample"/>
    <Label outline text="TEXT"/>
  </Example>
  <Code code={codeDemoSize} />

  <Title size="h4" text="Outline Colors" />
  <Example>
    <Label outline colorLabel="red"/>
    <Label outline text="Sample" colorLabel="#00e358"/>
    <Label outline text="TEXT" colorLabel="black"/>
  </Example>
  <Code code={codeOutlineColor} />

</BasePage>
