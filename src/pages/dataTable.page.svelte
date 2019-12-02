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
  let tbodyComponent = [Button, Checkbox, Button];
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
    <DataTable {thead} {tbody} />
  `;

  const CodeComponentOne = `
    import Button from './button.svelte';
    import Checkbox from './checkbox.svelte';

    let thead = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
    let tbody = [
      [Checkbox, 'Test 2', 'Test 3', Button],
      [Checkbox, 'Test 2', 'Test 3', Button],
      [Checkbox, 'Test 2', 'Test 3', Button],
    ];
    <DataTable {thead} {tbody} />
  `;
  const CodeComponentTwo = `
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
      colorTextHeader="#fff"
      colorbackgroundHeader="black"
      colorBackgroundBody="#353131"
      colorTextBody="#fff"
      colorbackgroundStriped="#1e1717" />
  `;

  const CodeComponentThree = `
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

    let thead = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
    let tbodyComponent = [Button, Button, Button];

    <DataTable {thead} {tbodyComponent} />
  `;
</script>

<BasePage>
  <Title size="h2" text="DataTable" />
  <Title size="h3" text="Attributes" />
  <Table col="3" {thead} tbody={tbodyDescription} />
  <Title size="h4" text="Basic" />
  <Example>
    <DataTable thead={theadTable} tbody={tbodyText} />
  </Example>
  <Code code={codeBasic} />

  <Title size="h4" text="Componets" />
  <Example>
    <DataTable thead={theadTable} {tbody} />
  </Example>
  <Code code={CodeComponentOne} />

  <Title size="h4" text="Colors" />
  <Example>
    <DataTable
      thead={theadTable}
      {tbody}
      colorTextHeader="#fff"
      colorbackgroundHeader="black"
      colorBackgroundBody="#353131"
      colorTextBody="#fff"
      colorbackgroundStriped="#1e1717" />
  </Example>
  <Code code={CodeComponentTwo} />

  <Example>
    <DataTable
      thead={theadTable}
      {tbody}
      colorbackgroundHeader="#DF364E"
      striped={false} />
  </Example>
  <Code code={CodeComponentThree} />

  <Title size="h4" text="Align center" />
  <Example>
    <DataTable
      thead={theadTable}
      {tbody}
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
    <DataTable thead={theadTable} {tbodyComponent} />
  </Example>
  <Code code={CodeComponentSix} />

</BasePage>
