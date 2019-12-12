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
    ['color', 'Define the color base', 'String', 'yes', '#624695'],
    ['hover', 'Define the hover color', 'String', 'yes', '#3f2371'],
    [
      'active',
      'Define the color when button is pressed',
      'String',
      'yes',
      '#26124a',
    ],
    ['small', 'Define a small button', 'Parameter', 'yes', '-'],
    ['big', 'Define a big button', 'Parameter', 'yes', '-'],
    ['pill', 'Define a rounded button', 'Parameter', 'yes', '-'],
    ['outline', 'Define a outline button', 'Parameter', 'yes', '-'],
    [
      'full',
      'Width set to 100% width of parent element',
      'Parameter',
      'yes',
      '-',
    ],
  ];

  const basic = `
    <Button />
    <Button>Click here</Button>
  `;
  const colors = `
    <Button color="blue">Color blue</Button>
    <Button hover="yellow">Hover Yellow</Button>
    <Button active="red">Active red</Button>
    <Button color="blue" hover="yellow" active="red">All of them</Button>
  `;
  const sizes = `
    <Button small>Small button</Button>
    <Button big>Big button</Button>
  `;
  const pill = `
    <Button pill />
    <Button pill>Pill button</Button>
  `;
  const outline = `
    <Button outline />
    <Button outline color="blue">Outline blue</Button>
    <Button outline color="blue" hover="yellow">Outline yellow</Button>
    <Button outline color="blue" hover="yellow" active="red">Outline all</Button>
  `;

  const full = `
    <Button full />
    <Button full color="blue">Full</Button>
    <Button outline full color="blue">Full outine</Button>
    <Button pill full color="blue">Full pill</Button>
  `;

  const custom = `
    <Button outline color="transparent" hover="transparent" active="#4b830d">
      <div class="custom-button">
       <!-- YOUR ELEMENT HERE ->
      </div>
    </Button>
  `;

  let trashIcon = `<svg style="width: 20px;" viewBox="0 0 512 512"><path d="M64 368v80h80l235.727-235.729-79.999-79.998L64 368zm377.602-217.602c8.531-8.531 8.531-21.334 0-29.865l-50.135-50.135c-8.531-8.531-21.334-8.531-29.865 0l-39.468 39.469 79.999 79.998 39.469-39.467z"/></svg>`;
  let editIcon = `<svg style="width: 20px;" viewBox="0 0 512 512"><path d="M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z"/></svg>`;
</script>

<style>
  .custom-button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .edit-button {
    color: #7cb342;
    fill: #7cb342;
  }
  .edit-button:hover {
    color: #4b830d;
    fill: #4b830d;
  }
  .delete-button {
    color: #f44336;
    fill: #f44336;
  }
  .delete-button:hover {
    color: #ba000d;
    fill: #ba000d;
  }
</style>

<BasePage>
  <Title size="h2" text="Button" />
  <Title size="h3" text="Props" />
  <Table {thead} {tbody} />

  <Title size="h4" text="Basic" />
  <Example>
    <Button />
    <Button>Click here</Button>
  </Example>
  <Code code={basic} />

  <Title size="h4" text="Colors" />
  <Example>
    <Button color="blue">Color blue</Button>
    <Button hover="yellow">Hover Yellow</Button>
    <Button active="red">Active red</Button>
    <Button color="blue" hover="yellow" active="red">All of them</Button>
  </Example>
  <Code code={colors} />

  <Title size="h4" text="Sizes" />
  <Example>
    <Button small>Small button</Button>
    <Button big>Big button</Button>
  </Example>
  <Code code={sizes} />

  <Title size="h4" text="Pill" />
  <Example>
    <Button pill />
    <Button pill>Pill button</Button>
  </Example>
  <Code code={pill} />

  <Title size="h4" text="Outline" />
  <Example>
    <Button outline />
    <Button outline color="blue">Outline blue</Button>
    <Button outline color="blue" hover="yellow">Outline yellow</Button>
    <Button outline color="blue" hover="yellow" active="red">
      Outline all
    </Button>
  </Example>
  <Code code={outline} />

  <Title size="h4" text="Full" />
  <Example>
    <Button full />
    <Button full color="blue">Full</Button>
    <Button outline full color="blue">Full outine</Button>
    <Button pill full color="blue">Full pill</Button>
  </Example>
  <Code code={full} />

  <Title size="h4" text="Custom" />
  <Example>
    <Button outline color="transparent" hover="transparent" active="#4b830d">
      <div class="custom-button edit-button">
        <span>
          {@html editIcon}
        </span>
        Edit
      </div>
    </Button>

    <Button outline color="transparent" hover="transparent" active="#ba000d">
      <div class="custom-button delete-button">
        <span>
          {@html trashIcon}
        </span>
        Delete
      </div>
    </Button>
  </Example>
  <Code code={custom} />
</BasePage>
