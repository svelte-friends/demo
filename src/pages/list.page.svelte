<script>
  import ListItem from '@packages/shared/listItem.svelte';
  import ListView from '@packages/shared/listView.svelte';

  import Button from '@packages/shared/button.svelte';
  import BasePage from './components/page.svelte';
  import Code from './components/code.svelte';
  import Title from './components/title.svelte';
  import Example from './components/example.svelte';
  import Table from './components/table.svelte';
  import Text from './components/text.svelte';

  const colors = ['#eceff1', '#babdbe', '#eceff1', '#babdbe', '#eceff1'];

  let thead = [
    'Parameter',
    'Description',
    'Type',
    'Optional value',
    'Default value',
  ];

  let tbody = [
    ['text', 'Define a text', 'String', 'no', ''],
    [
      'header',
      'Define a header to set in top of component',
      'String',
      'yes',
      '',
    ],
    ['color', 'Define the hover color', 'String', 'yes', ''],
  ];

  const _listItem = `
  <ListItem text="Blue" color="blue" header="Color" />
  <ListItem text="White" color="white" header="Color" />
  <ListItem text="Blue" color="blue" header="Color" />
  <ListItem text="White" color="white" header="Color" />
  <ListItem text="Blue" color="blue" header="Color" />
  `;
  const _listView = `
  const colors = ['#eceff1', '#babdbe', '#eceff1', '#babdbe', '#eceff1'];
  <ListView items={colors} let:item>
    <ListItem text={item} color={item} />
  </ListView>
  `;

  const _customListView = `
  const colors = ['#eceff1', '#babdbe', '#eceff1', '#babdbe', '#eceff1'];
  <ListView items={colors} let:item>
    <span style="line-height: 25px;">This is {item} color</span>
  </ListView>
  `;
</script>

<BasePage>
  <Title size="h2" text="ListItem" />
  <Text>Provide a basic component to use like list item.</Text>
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />
  <ListItem text="Blue" color="blue" header="Color" />
  <ListItem text="White" color="white" header="Color" />
  <ListItem text="Blue" color="blue" header="Color" />
  <ListItem text="White" color="white" header="Color" />
  <ListItem text="Blue" color="blue" header="Color" />
  <Code code={_listItem} />

  <Title size="h2" text="ListView" />
  <Text>Provide a wrapper to create lists.</Text>
  <Title size="h5" text="ListView with ListItem component" />
  <ListView items={colors} let:item>
    <ListItem text={item} color={item} />
  </ListView>
  <Code code={_listView} />

  <Title size="h5" text="ListView with custom item" />
  <ListView items={colors} let:item>
    <span style="line-height: 25px;">This is {item} color</span>
  </ListView>
  <Code code={_customListView} />

</BasePage>
