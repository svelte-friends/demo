<script>
  import Input from '@packages/shared/input.svelte';
  import BasePage from './components/page.svelte';
  import Code from './components/code.svelte';
  import Title from './components/title.svelte';
  import Example from './components/example.svelte';
  import Table from './components/table.svelte';
  import Text from './components/text.svelte';

  const thead = [
    'Parameter',
    'Description',
    'Type',
    'Optional value',
    'Default value',
  ];

  const tbody = [
    ['placeholder', 'Define a text to placeholder', 'String', 'yes', ''],
    ['label', 'Define a label to top of input', 'String', 'yes', ''],
    ['color', 'Define a base color', 'String', 'yes', '#000'],
    [
      'placeholderColor',
      'Define a color to placeholder text',
      'String',
      'yes',
      '#8c8c8c',
    ],
    [
      'backgroundColor',
      'Define a base background color',
      'String',
      'yes',
      '#fff',
    ],
    [
      'focusColor',
      'Define a color when input is focused',
      'String',
      'yes',
      '#000',
    ],
    ['type', 'Define a type for input', 'String', 'yes', 'text*'],
  ];

  const basic = `
    <Input />
    <Input placeholder="Enter a name" />
    <Input label="Enter a name" />
    <Input label="Enter a name" placeholder="eg. Fin or Rey" />
  `;

  const colors = `
    <Input color="blue" />
    <Input backgroundColor="gray" />
    <Input focusColor="red" />
    <Input placeholder="Enter a name" placeholderColor="orange" />
  `;

  const types = `
    <Input placeholder="Enter a name" />
    <Input type="number" placeholder="Enter a number" />
    <Input type="email" placeholder="Enter a email" />
    <Input type="password" placeholder="Enter a password" />
  `;

  const icons = `
    <Input placeholder="Enter a value" type="number">
      <i slot="left">&#36;</i>
    </Input>
    <Input placeholder="Enter a percentage" type="number">
      <i slot="right">&#x25;</i>
    </Input>
    <Input placeholder="Enter a email" type="email">
      <i slot="left">&#x40;</i>
    </Input>
  `;
</script>

<BasePage>
  <Title size="h2" text="Inputs" />
  <Text>Provide a text inputs</Text>
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />
  <Text>
    * Input does not accept the types 'checkbox' and 'radio', use the respective
    component for this type. If any of these are sent via parameter, the
    component automatically changes to type 'text'.
  </Text>

  <Title size="h4" text="Basic" />
  <Example>
    <Input />
    <Input placeholder="Enter a name" />
    <Input label="Enter a name" />
    <Input label="Enter a name" placeholder="eg. Fin or Rey" />
  </Example>
  <Code code={basic} />

  <Title size="h4" text="Colors" />
  <Example>
    <Input color="blue" />
    <Input backgroundColor="gray" />
    <Input focusColor="red" />
    <Input placeholder="Enter a name" placeholderColor="orange" />
  </Example>
  <Code code={colors} />

  <Title size="h4" text="Types" />
  <Example>
    <Input placeholder="Enter a name" />
    <Input type="number" placeholder="Enter a number" />
    <Input type="email" placeholder="Enter a email" />
    <Input type="password" placeholder="Enter a password" />
  </Example>

  <Example>
    <Input placeholder="Enter a value" type="number">
      <i slot="left">&#36;</i>
    </Input>
    <Input placeholder="Enter a percentage" type="number">
      <i slot="right">&#x25;</i>
    </Input>
    <Input placeholder="Enter a email" type="email">
      <i slot="left">&#x40;</i>
    </Input>
  </Example>
  <Code code={icons} />
</BasePage>
