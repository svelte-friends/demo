<script>
  import Modal from '@packages/shared/modal.svelte';
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
    [
      'background',
      'Define a color to background window',
      'String',
      'yes',
      'rgba(0, 0, 0, 0.5)',
    ],
  ];

  const modalCode = `
    <script>
      let open = false;
      function = handleClick() {
        open = !open;
      }
    <\/script>

    {#if open}
      <Modal on:close={handleClick}>
        <!-- YOUR CONTENT HERE -->
      </Modal>
    {/if}
  `;

  let open = false;

  function handleClick() {
    open = !open;
  }
</script>

<BasePage>
  <Title size="h2" text="Modal" />
  <Text>Provide a modal to use with any element</Text>
  <Title size="h3" text="Attributes" />
  <Table {thead} {tbody} />

  <Example>
    <Button text={open ? 'Close Modal' : 'Open Modal'} on:click={handleClick} />
    {#if open}
      <Modal on:close={handleClick}>
        <div
          class="modal-container"
          style="display: flex; flex-direction: column; align-items: center;">
          <h1>Modal Example</h1>
          <br />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <br />
          <Button
            text={open ? 'Close Modal' : 'Open Modal'}
            on:click={handleClick} />
        </div>
      </Modal>
    {/if}
  </Example>
  <Code code={modalCode} />
</BasePage>
