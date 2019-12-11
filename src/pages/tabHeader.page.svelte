<script>
  import TabHeader from '@packages/shared/tabHeader.svelte';
  import BasePage from './components/page.svelte';
  import Code from './components/code.svelte';
  import Title from './components/title.svelte';
  import Example from './components/example.svelte';
  import Table from './components/table.svelte';
  import Text from './components/text.svelte';

  let youtube =
    '<svg viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>';
  let linkedin =
    '<svg viewBox="0 0 576 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>';
  let facebook =
    '<svg viewBox="0 0 576 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>';
  let apple =
    '<svg viewBox="0 0 576 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>';
  let amazon =
    '<svg viewBox="0 0 576 512"><path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"/></svg>';
  let adobe =
    '<svg viewBox="0 0 576 512"><path d="M315.5 64h170.9v384L315.5 64zm-119 0H25.6v384L196.5 64zM256 206.1L363.5 448h-73l-30.7-76.8h-78.7L256 206.1z"/></svg>';
  let gitHub =
    '<svg viewBox="0 0 576 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>';
  let google =
    '<svg viewBox="0 0 576 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>';

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
      { label: 'Youtube' },
      { label: 'Linkedin' },
      { label: 'Facebook' },
      { label: 'Apple' },
      { label: 'Amazon' },
      { label: 'Adobe' },
      { label: 'GitHub' },
      { label: 'Google' }
    ];
      
    <TabHeader {items} />
  `;

  const basicTwo = `
    let items = [
      { label: 'Youtube' },
      { label: 'Linkedin' },
      { label: 'Facebook' },
      { label: 'Apple' },
      { label: 'Amazon' },
      { label: 'Adobe' },
      { label: 'GitHub' },
      { label: 'Google' }
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

  const basicTwoIcon = `
    // All icons are svg strings.
    let items = [
      { label: 'Youtube', icon: youtube },
      { label: 'Linkedin', icon: linkedin },
      { label: 'Facebook', icon: facebook },
      { label: 'Apple', icon: apple },
      { label: 'Amazon', icon: amazon },
      { label: 'Adobe', icon: adobe },
      { label: 'GitHub', icon: gitHub },
      { label: 'Google', icon: google },
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
      textColorHover="#fff"
      let:item>
        <span slot="icon">
          {@html item.icon}
        </span>
    </TabHeader>
  `;

  const basicThree = `
    let items = [
      { label: 'Youtube' },
      { label: 'Linkedin' },
      { label: 'Facebook' },
      { label: 'Apple' },
      { label: 'Amazon' },
      { label: 'Adobe' },
      { label: 'GitHub' },
      { label: 'Google' }
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
      { label: 'Youtube' },
      { label: 'Linkedin' },
      { label: 'Facebook' },
      { label: 'Apple' },
      { label: 'Amazon' },
      { label: 'Adobe' },
      { label: 'GitHub' },
      { label: 'Google' }
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
    { label: 'Youtube', icon: youtube },
    { label: 'Linkedin', icon: linkedin },
    { label: 'Facebook', icon: facebook },
    { label: 'Apple', icon: apple },
    { label: 'Amazon', icon: amazon },
    { label: 'Adobe', icon: adobe },
    { label: 'GitHub', icon: gitHub },
    { label: 'Google', icon: google },
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

  <Title size="h4" text="Icons" />
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
      textColorHover="#fff"
      let:item>
      <span slot="icon">
        {@html item.icon}
      </span>
    </TabHeader>
  </Example>
  <Code code={basicTwoIcon} />

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
