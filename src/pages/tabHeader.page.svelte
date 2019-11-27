<script>
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

  let tbody = [
    ['active', 'Define the item active', 'Integer', 'Yes', '1'],
    ['textColor', 'Define a color for the text', 'String', 'Yes', '#8c8c8c'],
    [
      'textColorActive',
      'Define a color for the text active',
      'String',
      'Yes',
      '#624695',
    ],
    [
      'colorBackground',
      'Define a color for the background  of text',
      'String',
      'Yes',
      '#fff',
    ],
    [
      'colorBackgroundActive',
      'Define a color for the background  of text active',
      'String',
      'Yes',
      '#fff',
    ],
    ['colorLine', 'Define a color for line', 'String', 'Yes', '#624695'],
    [
      'colorBackgroundHover',
      'Define a color for the background when hover',
      'String',
      'Yes',
      '#e3dcef',
    ],
    [
      'textColorHover',
      'Define a color for the text when hover',
      'String',
      'Yes',
      '#8c8c8c',
    ],
    [
      'colorScrollbar',
      'Define a color for the Scrollbar',
      'String',
      'Yes',
      '#624695',
    ],
    [
      'colorScrollbarTrack',
      'Define a color for the Scrollbar track',
      'String',
      'Yes',
      '#ebebeb',
    ],
  ];

  const basicOne = `
      let items = [
        { label: 'BUTTON' },
        { label: 'CHECKBOX' },
        { label: 'SWITCH' },
        { label: 'PROGRESS RING' },
        { label: 'DOT LABEL' },
        { label: 'PAGINATION' },
        { label: 'LIST' },
        { label: 'INPUT' }
      ];
      
    <TabHeader {items} />
  `;

  const basicTwo = `
      let items = [
        { label: 'BUTTON' },
        { label: 'CHECKBOX' },
        { label: 'SWITCH' },
        { label: 'PROGRESS RING' },
        { label: 'DOT LABEL' },
        { label: 'PAGINATION' },
        { label: 'LIST' },
        { label: 'INPUT' }
      ];
      
   <TabHeader
      {items}
      active="2"
      textColor="#fff"
      colorBackground="#624695"
      textColorActive="#fff"
      colorBackgroundActive="#1d0052eb"
      colorLine="#fff"
      colorBackgroundHover="#1d0052eb"
      textColorHover="#fff">
    </TabHeader>
  `;

  const basicThree = `
      let items = [
        { label: 'BUTTON' },
        { label: 'CHECKBOX' },
        { label: 'SWITCH' },
        { label: 'PROGRESS RING' },
        { label: 'DOT LABEL' },
        { label: 'PAGINATION' },
        { label: 'LIST' },
        { label: 'INPUT' }
      ];
      
   <TabHeader
      {items}
      active="3"
      textColor="#fff"
      colorBackground="#b14a4a"
      textColorActive="yellow"
      colorBackgroundActive="#821717"
      colorLine="yellow"
      colorBackgroundHover="#821717"
      textColorHover="yellow"
      colorScrollbar="yellow"
      colorScrollbarTrack="#821717" />
  `;

  const basicFour = `
      let items = [
        { label: 'BUTTON' },
        { label: 'CHECKBOX' },
        { label: 'SWITCH' },
        { label: 'PROGRESS RING' },
        { label: 'DOT LABEL' },
        { label: 'PAGINATION' },
        { label: 'LIST' },
        { label: 'INPUT' }
      ];
      
    <TabHeader
      {items}
      active="4"
      textColor="black"
      colorBackground="grey"
      textColorActive="#fff"
      colorBackgroundActive="black"
      colorLine="#fff"
      colorBackgroundHover="#fff"
      textColorHover="black"
      colorScrollbar="black"
      colorScrollbarTrack="#ccc" />
  `;

  const basicFive = `
      let items = [
        { label: 'BUTTON' },
        { label: 'CHECKBOX' },
        { label: 'SWITCH' },
        { label: 'PROGRESS RING' },
        { label: 'DOT LABEL' },
        { label: 'PAGINATION' },
        { label: 'LIST' },
        { label: 'INPUT' },
        { label: 'LABEL' },
        { label: 'TAB HEADER' },
        { label: 'PROGRESS BAR' },
        { label: 'DRAWER' },
        { label: 'TOGGLE' },
        { label: 'TABS' },
        { label: 'GRID' },
      ];
      
   <TabHeader
      {items}
      active="5"
      textColor="#fff"
      colorBackground="#009688"
      textColorActive="#fff"
      colorBackgroundActive="#12463e"
      colorLine="#fff"
      colorBackgroundHover="#12463e"
      textColorHover="#fff"
      colorScrollbar="#12463e"
      colorScrollbarTrack="#ccc" />
  `;

  let itemsOne = [
    { label: 'BUTTON' },
    { label: 'CHECKBOX' },
    { label: 'SWITCH' },
    { label: 'PROGRESS RING' },
    { label: 'DOT LABEL' },
    { label: 'PAGINATION' },
    { label: 'LIST' },
    { label: 'INPUT' },
  ];

  let itemsTwo = [
    { label: 'BUTTON' },
    { label: 'CHECKBOX' },
    { label: 'SWITCH' },
    { label: 'PROGRESS RING' },
    { label: 'DOT LABEL' },
    { label: 'PAGINATION' },
    { label: 'LIST' },
    { label: 'INPUT' },
    { label: 'LABEL' },
    { label: 'TAB HEADER' },
    { label: 'PROGRESS BAR' },
    { label: 'DRAWER' },
    { label: 'TOGGLE' },
    { label: 'TABS' },
    { label: 'GRID' },
  ];
</script>

<BasePage>
  <Title size="h2" text="Tab Header" />
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />

  <Title size="h4" text="Basic" />
  <Example>
    <TabHeader items={itemsOne} />
  </Example>
  <Code code={basicOne} />

  <Title size="h4" text="Colors" />
  <Example>
    <TabHeader
      items={itemsOne}
      active="2"
      textColor="#fff"
      colorBackground="#624695"
      textColorActive="#fff"
      colorBackgroundActive="#1d0052eb"
      colorLine="#fff"
      colorBackgroundHover="#1d0052eb"
      textColorHover="#fff" />
  </Example>
  <Code code={basicTwo} />

  <Example>
    <TabHeader
      items={itemsOne}
      active="3"
      textColor="#fff"
      colorBackground="#b14a4a"
      textColorActive="yellow"
      colorBackgroundActive="#821717"
      colorLine="yellow"
      colorBackgroundHover="#821717"
      textColorHover="yellow"
      colorScrollbar="yellow"
      colorScrollbarTrack="#821717" />
  </Example>
  <Code code={basicThree} />

  <Example>
    <TabHeader
      items={itemsOne}
      active="4"
      textColor="black"
      colorBackground="grey"
      textColorActive="#fff"
      colorBackgroundActive="black"
      colorLine="#fff"
      colorBackgroundHover="#fff"
      textColorHover="black"
      colorScrollbar="black"
      colorScrollbarTrack="#ccc" />
  </Example>
  <Code code={basicFour} />

  <Title size="h4" text="Scroll" />
  <Example>
    <TabHeader
      items={itemsTwo}
      active="5"
      textColor="#fff"
      colorBackground="#009688"
      textColorActive="#fff"
      colorBackgroundActive="#12463e"
      colorLine="#fff"
      colorBackgroundHover="#12463e"
      textColorHover="#fff"
      colorScrollbar="#12463e"
      colorScrollbarTrack="#ccc" />
  </Example>
  <Code code={basicFive} />

</BasePage>
