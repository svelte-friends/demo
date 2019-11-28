<script>
  import DropDown from '@packages/shared/dropdown.svelte';
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
    ['list', 'A list of options', 'Array<String>', 'no', ''],
    ['color', 'Define a color button', 'String', 'yes', '#fff'],
  ];

  const editOptions = ['Cut', 'Copy', 'Past'];
  const fileOptions = [
    'Open File',
    'Open Folder',
    'Open Workspace',
    'Open Recent',
  ];
  const helpOptions = ['Welcome', 'Documentation'];
  const myAccount = ['Welcome', 'Profile', 'Friends', 'Messages'];

  let codeBasic = `
    const editOptions = ['Cut', 'Copy', 'Past'];
    const fileOptions = [
      'Open File',
      'Open Folder',
      'Open Workspace',
      'Open Recent',
    ];
    const helpOptions = ['Welcome', 'Documentation'];
    const myAccount = ['Welcome', 'Profile', 'Friends', 'Messages'];

    <DropDown label="File" list={fileOptions} />
    <DropDown label="Edit" list={editOptions} />
    <DropDown label="Options" list={fileOptions} />
    <DropDown label="My Account" list={myAccount} />
  `;

  let codeColors = `
    <DropDown color="#e57373" label="File" list={fileOptions} />
    <DropDown color="#fff176" label="Edit" list={editOptions} />
    <DropDown color="#4db6ac" label="Options" list={fileOptions} />
    <DropDown color="#81c784" label="My Account" list={myAccount} />
  `;

  let codeValue = `
    <script>
      function handleClick(evt) {
        console.log(evt.target.dataset);
        // You receive a 'key' and 'value' properties
      }
    <\/script>

    <DropDown on:click={handleClick} label="File" list={fileOptions} />
  `
</script>

<BasePage>
  <Title size="h2" text="DropDown" />
  <Text>Provide a dropdown to menu actions.</Text>
  <Title size="h3" text="Attributes" />

  <Table {thead} {tbody} />

  <Title size="h4" text="Basic" />
  <Example>
    <DropDown label="File" list={fileOptions} />
    <DropDown label="Edit" list={editOptions} />
    <DropDown label="Options" list={fileOptions} />
    <DropDown label="My Account" list={myAccount} />
  </Example>
  <Code code={codeBasic} />

  <Title size="h4" text="Colors" />
  <Example>
    <DropDown color="#e57373" label="File" list={fileOptions} />
    <DropDown color="#fff176" label="Edit" list={editOptions} />
    <DropDown color="#4db6ac" label="Options" list={fileOptions} />
    <DropDown color="#81c784" label="My Account" list={myAccount} />
  </Example>
  <Code code={codeColors} />

  <Title size="h4" text="Return value" />
  <Code code={codeValue} />
</BasePage>
