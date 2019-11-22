<script>
  import DotLabel from '@packages/shared/dotLabel.svelte';
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
    ['text', 'We use to define a text.', 'String', 'false', 'Sample'],
    [
      'number',
      'We use to define a number if number > 99 show 99+.',
      'Integer',
      'false',
      'Min: 0 and Max: 99',
    ],
    ['small', 'We use to define a size.', 'String', 'true', 'false'],
    [
      'colorText',
      'We use to define a color for text.',
      'String',
      'true',
      '#000',
    ],
    [
      'colorBadge',
      'We use to define a color for badge.',
      'String',
      'true',
      '#624695',
    ],
    [
      'textBadgeColor',
      'We use to define a color for text in badge.',
      'String',
      'true',
      'white',
    ],
  ];

  let codeDemoBasic = `
    <DotLabel />
    <DotLabel number="10" text="One" />
    <DotLabel number="99" text="Two" />
    <DotLabel number="150" text="Three" />
  `;

  let codeDemoColor = `
    <DotLabel colorText="red" colorBadge="red" />
    <DotLabel colorText="red" colorBadge="red" number="10" />
    <DotLabel colorText="grey" colorBadge="grey" number="99" />
    <DotLabel colorBadge="black" textBadgeColor="yellow" number="150" />
  `;

  let codeDemoSize = `
    <DotLabel small />
    <DotLabel />
  `;
</script>

<BasePage>
  <Title size="h2" text="Dot Label" />
  <Table {thead} {tbody} />

  <Title size="h4" text="Basic" />
  <Example>
    <DotLabel />
    <DotLabel number="10" text="One" />
    <DotLabel number="99" text="Two" />
    <DotLabel number="150" text="Three" />
  </Example>
  <Code code={codeDemoBasic} />

  <Title size="h4" text="Colors" />
  <Example>
    <DotLabel colorText="red" colorBadge="red" />
    <DotLabel colorText="red" colorBadge="red" number="10" />
    <DotLabel colorText="grey" colorBadge="grey" number="99" />
    <DotLabel colorBadge="black" textBadgeColor="yellow" number="150" />
  </Example>
  <Code code={codeDemoColor} />

  <Title size="h4" text="Size" />
  <Example>
    <DotLabel small text="Small" />
    <DotLabel text="Default" />
  </Example>
  <Code code={codeDemoSize} />

</BasePage>
