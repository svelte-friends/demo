<script>
  import DataTable from '@packages/shared/dataTable.svelte';
  import Button from '@packages/shared/button.svelte';
  import Checkbox from '@packages/shared/checkbox.svelte';
  import TabHeader from '@packages/shared/tabHeader.svelte';
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
  let theadTable = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];

  let theadTableOne = [
    { label: 'Column 1' },
    { label: 'Column 2' },
    { label: 'Column 3' },
    { label: 'Column 4' },
  ];

  let theadTableTwo = [
    { label: '', width: '2%' },
    { label: 'Column' },
    { label: 'Column' },
    { label: '', width: '5%' },
  ];

  let theadTableCol = ['Column 1', 'Column 2', 'Column 3'];
  export let tbodyText = [
    ['Test 1', 'Test 2', 'Test 3', 'Test 4'],
    ['Test 1', 'Test 2', 'Test 3', 'Test 4'],
    ['Test 1', 'Test 2', 'Test 3', 'Test 4'],
  ];
  let tbody = [
    [Checkbox, 'Test 2', 'Test 3', Button],
    [Checkbox, 'Test 2', 'Test 3', Button],
    [Checkbox, 'Test 2', 'Test 3', Button],
  ];

  let tbodyDescription = [
    ['border', 'Set the border.', 'Boolean', 'Yes', 'false'],
    ['colorBorder', 'Define a color for border', 'Boolean', 'Yes', '#ddd'],
    ['col', 'Set the column total.', 'String', 'No', '4'],
    [
      'striped',
      'Use "striped" to add zebra-striping to any row.',
      'Boolean',
      'No',
      'true',
    ],
    [
      'colorbackgroundStriped',
      'Define a color for the row',
      'String',
      'Yes',
      '#ebebeb',
    ],
    [
      'colorTextHeader',
      'Define a color for the text header',
      'String',
      'Yes',
      '#fff',
    ],
    [
      'colorbackgroundHeader',
      'Define a color for the background  of header',
      'String',
      'Yes',
      '#fff',
    ],
    [
      'colorTextBody',
      'Define a color for the text  of content body',
      'String',
      'Yes',
      'black',
    ],
    [
      'colorBackgroundBody',
      'Define a color for the background  of body',
      'String',
      'Yes',
      '#fff',
    ],
    [
      'textAlignHeader',
      'Define text align for the header',
      'String',
      'Yes',
      'start',
    ],
    [
      'textAlignBody',
      'Define text align for the contend body',
      'String',
      'Yes',
      'start',
    ],
  ];

  const codeBasic = `
    let thead = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
    let tbody = [
      ['Test 1', 'Test 2', 'Test 3', 'Test 4'],
      ['Test 1', 'Test 2', 'Test 3', 'Test 4'],
      ['Test 1', 'Test 2', 'Test 3', 'Test 4'],
    ];
    <DataTable {thead} {tbody} col="4" />
  `;

  const codeBasicOne = `
    let thead = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
    let tbody = [
      ['Test 1', 'Test 2', 'Test 3', 'Test 4'],
      ['Test 1', 'Test 2', 'Test 3', 'Test 4'],
      ['Test 1', 'Test 2', 'Test 3', 'Test 4'],
    ];
    <DataTable {thead} {tbody} col="4" border={true} colorBorder="#9054ff" />
  `;

  const CodeComponentOne = `
    import Button from './button.svelte';
    import Checkbox from './checkbox.svelte';

    let thead = ['Column 1', 'Column 2', 'Column 3'];
    let tbody = [
      [Checkbox, 'Test 2', 'Test 3', Button],
      [Checkbox, 'Test 2', 'Test 3', Button],
      [Checkbox, 'Test 2', 'Test 3', Button],
    ];
    <DataTable {thead} {tbody} col="4" />
  `;
  const CodeComponentTwo = `
    import Button from './button.svelte';
    import Checkbox from './checkbox.svelte';

    let thead = ['Column 1', 'Column 2', 'Column 3'];
    let tbody = [
      [Checkbox, 'Test 2', 'Test 3', Button],
      [Checkbox, 'Test 2', 'Test 3', Button],
      [Checkbox, 'Test 2', 'Test 3', Button],
    ];
    <DataTable
      {thead}
      {tbody}
      col="4" 
      colorTextHeader="#fff"
      colorbackgroundHeader="black"
      colorBackgroundBody="#353131"
      colorTextBody="#fff"
      colorbackgroundStriped="#1e1717" />
  `;

  const CodeComponentThree = `
    import Button from './button.svelte';
    import Checkbox from './checkbox.svelte';

    let thead = ['Column 1', 'Column 2', 'Column 3'];
    let tbody = [
      [Checkbox, 'Test 2', 'Test 3', Button],
      [Checkbox, 'Test 2', 'Test 3', Button],
      [Checkbox, 'Test 2', 'Test 3', Button],
    ];
    <DataTable
      {thead}
      {tbody}
      col="4"
      border={true} 
      colorbackgroundHeader="#DF364E"
      striped={false} />
  `;

  const CodeComponentFour = `
    import Button from './button.svelte';
    import Checkbox from './checkbox.svelte';

    let thead = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
    let tbody = [
      [Checkbox, 'Test 2', 'Test 3', Button],
      [Checkbox, 'Test 2', 'Test 3', Button],
      [Checkbox, 'Test 2', 'Test 3', Button],
    ];
    <DataTable
      {thead}
      {tbody}
      col="4" 
      colorTextHeader="#fff"
      colorbackgroundHeader="black"
      colorBackgroundBody="#353131"
      colorTextBody="#fff"
      colorbackgroundStriped="#1e1717"
      textAlignHeader="center"
      textAlignBody="center" />
  `;

  const CodeComponentFive = `
    import Button from './button.svelte';
    import Checkbox from './checkbox.svelte';

    let thead = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
    let tbody = [
      [Checkbox, 'Test 2', 'Test 3', Button],
      [Checkbox, 'Test 2', 'Test 3', Button],
      [Checkbox, 'Test 2', 'Test 3', Button],
    ];
    <DataTable
      {thead}
      {tbody}
      col="4" 
      colorTextHeader="#fff"
      colorbackgroundHeader="black"
      colorBackgroundBody="#353131"
      colorTextBody="#fff"
      colorbackgroundStriped="#1e1717"
      textAlignHeader="end"
      textAlignBody="end" />
  `;

  const CodeComponentSix = `
    import Button from './button.svelte';
    import Checkbox from './checkbox.svelte';

    Example: TrComponent.svelte
    <tr>
      <td>
        <Checkbox />
      </td>
      <td>Test</td>
      <td>Test</td>
      <td>
        <Button />
      </td>
    </tr>

    let thead = [
      { label: '', width: '2%' },
      { label: 'Column' },
      { label: 'Column' },
      { label: '', width: '5%' },
    ];
    let tbodyComponent = [TrComponent, TrComponent, TrComponent];

    <DataTable {thead} {tbodyComponent} col="4"  />
  `;
</script>

<BasePage>
  <Title size="h2" text="DataTable" />
  <Title size="h3" text="Attributes" />
  <Table col="3" {thead} tbody={tbodyDescription} />
  <Title size="h4" text="Basic" />

  <Example>
    <DataTable thead={theadTableOne} tbody={tbodyText} col="4" />
  </Example>
  <Code code={codeBasic} />

  <Example>
    <DataTable
      border={true}
      colorBorder="#9054ff"
      thead={theadTableOne}
      tbody={tbodyText}
      col="4" />
  </Example>
  <Code code={codeBasicOne} />

  <Title size="h4" text="Componets" />
  <Example>
    <DataTable thead={theadTableOne} {tbody} col="4" />
  </Example>
  <Code code={CodeComponentOne} />

  <Title size="h4" text="Colors" />
  <Example>
    <DataTable
      thead={theadTableOne}
      {tbody}
      col="4"
      colorTextHeader="#fff"
      colorbackgroundHeader="black"
      colorBackgroundBody="#353131"
      colorTextBody="#fff"
      colorbackgroundStriped="#1e1717" />
  </Example>
  <Code code={CodeComponentTwo} />

  <Example>
    <DataTable
      thead={theadTableTwo}
      {tbody}
      col="4"
      border={true}
      colorbackgroundHeader="#DF364E"
      striped={false} />
  </Example>
  <Code code={CodeComponentThree} />

  <Title size="h4" text="Align center" />
  <Example>
    <DataTable
      thead={theadTableOne}
      {tbody}
      col="4"
      colorTextHeader="#fff"
      colorbackgroundHeader="black"
      colorBackgroundBody="#353131"
      colorTextBody="#fff"
      colorbackgroundStriped="#1e1717"
      textAlignHeader="center"
      textAlignBody="center" />
  </Example>
  <Code code={CodeComponentFour} />

  <Title size="h4" text="Align end" />
  <Example>
    <DataTable
      thead={theadTable}
      {tbody}
      col="4"
      colorTextHeader="#fff"
      colorbackgroundHeader="black"
      colorBackgroundBody="#353131"
      colorTextBody="#fff"
      colorbackgroundStriped="#1e1717"
      textAlignHeader="end"
      textAlignBody="end" />
  </Example>
  <Code code={CodeComponentFive} />

  <Title size="h4" text="Components" />
  <Example>
    <DataTable
      thead={theadTableTwo}
      {tbody}
      col="4"
      colorbackgroundHeader="#DF364E"
      striped={false} />
  </Example>
  <Code code={CodeComponentSix} />

</BasePage>
