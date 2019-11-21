<script>
  import Button from '@packages/shared/button.svelte';
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
    ['text', 'Define a text in button', 'String', 'true', 'Sample'],
    ['color', 'Define the color base', 'String', 'true', '#624695'],
    ['hover', 'Define the hover color', 'String', 'true', '#3f2371'],
    [
      'active',
      'Define the color when button is pressed',
      'String',
      'true',
      '#26124a',
    ],
    ['small', 'Define a small button', 'Parameter', 'true', 'undefined'],
    ['big', 'Define a big button', 'Parameter', 'true', 'undefined'],
    ['pill', 'Define a rounded button', 'Parameter', 'true', 'undefined'],
    ['outline', 'Define a outline button', 'Parameter', 'true', 'undefined'],
  ];

  const basic = `
    <Button />
    <Button text="click here" />
  `;
  const colored = `
    <Button color="blue" />
    <Button hover="yellow" />
    <Button active="red" />
    <Button color="blue" hover="yellow" active="red" />
  `;
  const sizes = `
    <Button small />
    <Button big />
  `;
  const pill = `
    <Button pill />
    <Button pill text="Click here" />
  `;
  const outline = `
    <Button outline />
    <Button outline color="blue" />
    <Button outline color="blue" hover="yellow" />
    <Button outline color="blue" hover="yellow" active="red" />
  `;
</script>

<BasePage>
  <Title size="h2" text="Button" />
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />

  <Title size="h4" text="Basic" />
  <Example>
    <Button />
    <Button text="Click here" />
  </Example>
  <Code code={basic} />

  <Title size="h4" text="Colored" />
  <Example>
    <Button color="blue" />
    <Button hover="yellow" />
    <Button active="red" />
    <Button color="blue" hover="yellow" active="red" />
  </Example>
  <Code code={colored} />

  <Title size="h4" text="Sizes" />
  <Example>
    <Button small />
    <Button big />
  </Example>
  <Code code={sizes} />

  <Title size="h4" text="Pill" />
  <Example>
    <Button pill />
    <Button pill text="Click here" />
  </Example>
  <Code code={pill} />

  <Title size="h4" text="Outline" />
  <Example>
    <Button outline />
    <Button outline color="blue" />
    <Button outline color="blue" hover="yellow" />
    <Button outline color="blue" hover="yellow" active="red" />
  </Example>
  <Code code={outline} />

</BasePage>
