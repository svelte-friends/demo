<script>
  import RadioButton from '@packages/shared/radioButton.svelte';

  let codeDemoBasic = `
   <RadioButton />
   <RadioButton label="Radio checked" checked />
  `;

  let codeDemoColor = `
   <RadioButton label="Radio red" color="red" />
   <RadioButton label="Radio red" color="red" checked />
  `;

  let codeDemoDisabled = `
   <RadioButton label="Disabled" color="red" disabled />
  <RadioButton label="Disabled" disabled checked />
  `;

  let attributes = [
    {
      parameter: 'name',
      description: 'We use to define the name.',
      type: 'String',
      optionalValue: 'true',
      defaultValue: 'undefined',
    },
    {
      parameter: 'value',
      description: 'We use to define a value.',
      type: 'String / integer',
      optionalValue: 'true',
      defaultValue: 'undefined',
    },
    {
      parameter: 'label',
      description: 'We use to define a text.',
      type: 'String',
      optionalValue: 'true',
      defaultValue: '---',
    },
    {
      parameter: 'checked',
      description: 'We use to define if checked.',
      type: 'Bolean',
      optionalValue: 'true',
      defaultValue: 'false',
    },
    {
      parameter: 'color',
      description: 'We use to define a color.',
      type: 'String',
      optionalValue: 'true',
      defaultValue: '#624695',
    },
    {
      parameter: 'disabled',
      description: 'We use to define if disabled.',
      type: 'Bolean',
      optionalValue: 'true',
      defaultValue: 'false',
    },
  ];
</script>

<div class="content">
  <h2>Radio</h2>
  <p>Provide a radio button for individual selection.</p>
  <h4>Attributes</h4>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th>Parameter</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional value</th>
        <th>Default value</th>
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
            <code class="highlighter-rouge">{item.defaultValue}</code>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <h5>Basic</h5>
  <div class="example">
    <div>
      <RadioButton />
    </div>
    <div>
      <RadioButton label="Radio checked" checked />
    </div>
  </div>
  <pre>
    <code>{codeDemoBasic}</code>
  </pre>

  <h5>Colors</h5>
  <div class="example">
    <div>
      <RadioButton label="Radio red" color="red" />
    </div>
    <div>
      <RadioButton label="Radio red" color="red" checked />
    </div>
  </div>

  <pre>
    <code>{codeDemoColor}</code>
  </pre>

  <h5>Disabled</h5>
  <div class="example">
    <div>
      <RadioButton label="Disabled" color="red" disabled />
    </div>
    <div>
      <RadioButton label="Disabled" disabled checked />
    </div>
  </div>
  <pre>
    <code>{codeDemoDisabled}</code>
  </pre>
</div>
