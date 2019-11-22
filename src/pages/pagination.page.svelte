<script>
  import Pagination from '@packages/shared/pagination.svelte';
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
    ['color', 'We use to define a color.', 'String', 'true', '#624695'],
    ['total', 'We use to define a total of pages.', 'Integer', 'true', '20'],
    [
      'displayRows',
      'We use to define a total of rows to be show.',
      'Integer',
      'true',
      '2',
    ],
    ['active', 'We use to define the active page.', 'Integer', 'true', '1'],
  ];

  let codeDemoBasic = `
    <Pagination />
    <Pagination active={4} />
  `;

  let codeDemoColor = `
    <Pagination color="red" active="2" />
    <Pagination active={4} color="green" />
    `;

  let codeDemoCustom = `
    <Pagination displayRows{10} total={100} color="red" active={4} />
    <Pagination displayRows{20} total={60} active={5} />
  `;
</script>

<BasePage>
  <Title size="h2" text="Pagination" />
  <Table {thead} {tbody} />

  <Title size="h4" text="Basic" />
  <Example>
    <Pagination />
    <Pagination active={4} />
  </Example>
  <Code code={codeDemoBasic} />

  <Title size="h4" text="Colors" />
  <Example>
    <Pagination color="red" active="2" />
    <Pagination active={4} color="green" />
  </Example>
  <Code code={codeDemoColor} />

  <Title size="h4" text="Custom" />
  <Example>
    <Pagination displayRows{10} total={100} color="red" active={4} />
    <Pagination displayRows{20} total={60} active={5} />
  </Example>
  <Code code={codeDemoCustom} />

</BasePage>
