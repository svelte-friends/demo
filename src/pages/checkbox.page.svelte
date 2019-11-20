<script>
  import CheckBox from '@packages/shared/checkbox.svelte';

  let codeDemo = `
  // Basic checkbox
   <CheckBox />
   <CheckBox label="Checkbox" checked />

  // Checkbox color
   <CheckBox label="Checkbox" color="red" />
   <CheckBox label="Checkbox" checked color="red" />

  // Disabled state
   <CheckBox label="Disabled" checked disabled />
   <CheckBox label="Disabled" disabled />
   
  `;

  let attributes = [
    {
      parameter: 'label',
      description: 'We use to define a text.',
      type: 'String',
      optionalValue: '---',
      defaultValuie: '---',
    },
    {
      parameter: 'checked',
      description: 'We use to define if checked.',
      type: 'Bolean',
      optionalValue: '---',
      defaultValuie: 'false',
    },
    {
      parameter: 'color',
      description: 'We use to define a color.',
      type: 'String',
      optionalValue: 'true',
      defaultValuie: '#624695',
    },
    {
      parameter: 'disabled',
      description: 'We use to define if disabled.',
      type: 'Bolean',
      optionalValue: 'true',
      defaultValuie: 'false',
    },
  ];
</script>

<div class="content">
  <h2>Checkbox</h2>
  <p>Provide multiple checkboxes for multiple selections.</p>
  <h4>Attributes</h4>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th>Parameter</th>
        <th>description</th>
        <th>type</th>
        <th>optional value</th>
        <th>default value</th>
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

  <h5>Basic checkbox</h5>
  <div class="example">
    <div>
      <CheckBox />
    </div>
    <div>
      <CheckBox label="Checkbox" checked />
    </div>
  </div>

  <h5>Checkbox colors</h5>
  <div class="example">
    <div>
      <CheckBox label="Checkbox" color="red" />
    </div>
    <div>
      <CheckBox label="Checkbox" checked color="red" />
    </div>
  </div>

  <h5>Disabled state</h5>
  <div class="example">
    <div>
      <CheckBox label="Disabled" checked disabled />
    </div>
    <div>
      <CheckBox label="Disabled" disabled />
    </div>
  </div>

  <h5>Example</h5>
  <pre>
    <code>{codeDemo}</code>
  </pre>
</div>
