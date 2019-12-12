<script>
  import Drawer from '@packages/shared/drawer.svelte';
  import Button from '@packages/shared/button.svelte';
  import BasePage from './components/page.svelte';
  import Code from './components/code.svelte';
  import Title from './components/title.svelte';
  import Example from './components/example.svelte';
  import Table from './components/table.svelte';
  import Text from './components/text.svelte';

  let basicShow = false,
    persistentShow = false;

  function clickBasic() {
    basicShow = !basicShow;
  }

  function clickPersistent() {
    persistentShow = !persistentShow;
  }

  let thead = [
    'Parameter',
    'Description',
    'Type',
    'Optional value',
    'Default value',
  ];

  let tbody = [
    [
      'persistent',
      'Define if drawer overflow page content or  sits on the same surface as the content',
      'boolen',
      '',
      'false',
    ],
  ];

  const basicCode = `
    <script>
      let show = false;
      function handleClick() {
        show = !show;
      }
    <\/script>

    <Button text={show ? 'Close Drawer' : 'Open Drawer'} on:click={handleClick} />

    <Drawer {show} on:close={handleClick}>
      <!-- YOUR CONTENT HERE -->
    </Drawer>
  `;

  const persistentCode = `
    <script>
      let show = false;
      function handleClick() {
        show = !show;
      }
    <\/script>

    <Button text={show ? 'Close Drawer' : 'Open Drawer'} on:click={handleClick} />

    <Drawer {show} on:close={handleClick} persistent>
      <!-- YOUR CONTENT HERE -->
    </Drawer>
  `;
</script>

<style>
  .container {
    width: 200px;
    display: flex;
    flex-direction: column;
  }

  .container > * {
    height: 50px;
    background: #cecece;
    border: 2px solid blueviolet;
  }

  .example-persistent {
    display: flex;
    height: 200px;
  }
</style>

<BasePage>
  <Title size="h2" text="Drawer" />
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />

  <Title size="h5" text="Basic" />
  <Example>
    <Button
      text={basicShow ? 'Close Drawer' : 'Open Drawer'}
      on:click={clickBasic} />
    {#if basicShow}
      <Drawer show={basicShow} on:close={clickBasic}>
        <div class="container">
          {#each ['Item 1', 'Item 2', 'Item 3'] as item}
            <span>{item}</span>
          {/each}
        </div>
      </Drawer>
    {/if}
  </Example>
  <Code code={basicCode} />

  <Title size="h5" text="Persistent" />
  <div class="example-persistent">
    {#if persistentShow}
      <Drawer show={persistentShow} on:close={clickPersistent} persistent>
        <div class="container">
          {#each ['Item 1', 'Item 2', 'Item 3'] as item}
            <span>{item}</span>
          {/each}
        </div>
      </Drawer>
    {/if}
    <Button
      text={persistentShow ? 'Close Drawer' : 'Open Drawer'}
      on:click={clickPersistent} />
  </div>
  <Code code={persistentCode} />
</BasePage>
