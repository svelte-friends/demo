<script>
  import Switch from '@packages/shared/switch.svelte';

  let codeDemoBasic = `
    <Switch />
    <Switch on />
  `;

  let codeDemoColor = `
     <Switch color="grey" on />
     <Switch buttonColor="grey" on /> 
  `;

  let codeDemoDisabled = `
     <Switch disabled />
     <Switch disabled on />
  `;
  
  let attributes = [
    {
      parameter: 'on',
      description: 'Usamos para definir o botão a direita.',
      type: 'Bolean',
      optionalValue: '---',
      defaultValuie: 'false',
    },
    {
      parameter: 'color',
      description: 'Usamos para definir uma cor para o switch.',
      type: 'String',
      optionalValue: 'true',
      defaultValuie: '#b1d660',
    },
    {
      parameter: 'buttonColor',
      description: 'Usamos para definir uma cor para o botão.',
      type: 'String',
      optionalValue: 'true',
      defaultValuie: '#e0fe9f',
    },
    {
      parameter: 'disabled',
      description: 'Usamos para definir se desativado.',
      type: 'Bolean',
      optionalValue: 'true',
      defaultValuie: 'false',
    },
  ];
</script>

<div class="content">
  <h2>Switch</h2>
  <p>Alterna para ativar ou desativar o estado de uma única configuração.</p>
  <h4>Atributos</h4>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th>Parâmetro</th>
        <th>descrição</th>
        <th>tipo</th>
        <th>valor opcional</th>
        <th>valor padrão</th>
      </tr>
    </thead>
    <tbody>
      {#each attributes as item}
        <tr>
          <td>
            <code class="highlighter-rouge">{item.parameter}</code>
          </td>
          <td>{item.description}</td>
          <td>
            <code class="highlighter-rouge">{item.type}</code>
          </td>
          <td>
            <code class="highlighter-rouge">{item.optionalValue}</code>
          </td>
          <td>
            <code class="highlighter-rouge">{item.defaultValuie}</code>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <h5>Switch padrão</h5>
  <div class="example">
    <div>
      <Switch />
    </div>
    <div>
      <Switch on />
    </div>
  </div>
  <pre>
    <code>{codeDemoBasic}</code>
  </pre>

  <h5>Switch colors</h5>
  <div class="example">
    <div>
      <Switch color="grey" on />
    </div>
    <div>
      <Switch buttonColor="grey" on />
    </div>
  </div>
  <pre>
    <code>{codeDemoColor}</code>
  </pre>

  <h5>Switch desativado</h5>
  <div class="example">
    <div>
      <Switch disabled />
    </div>
    <div>
      <Switch disabled on />
    </div>
  </div>
  <pre>
    <code>{codeDemoDisabled}</code>
  </pre>

</div>
