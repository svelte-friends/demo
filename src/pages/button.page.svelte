<script>
  import Button from '@packages/shared/button.svelte';

  const attributes = [
    {
      parameter: 'text',
      description: 'Define a text in button',
      type: 'String',
      optionalValue: 'yes',
      defaultValue: 'Sample',
    },
    {
      parameter: 'color',
      description: 'Define the color base',
      type: 'String',
      optionalValue: 'yes',
      defaultValue: '#624695',
    },
    {
      parameter: 'hover',
      description: 'Define the hover color',
      type: 'String',
      optionalValue: 'yes',
      defaultValue: '#3f2371',
    },
    {
      parameter: 'active',
      description: 'Define the color when button is pressed',
      type: 'String',
      optionalValue: 'yes',
      defaultValue: '#26124a',
    },
    {
      parameter: 'small',
      description: 'Define a small button',
      type: 'Parameter',
      optionalValue: 'yes',
      defaultValue: 'undefined',
    },
    {
      parameter: 'big',
      description: 'Define a big button',
      type: 'Parameter',
      optionalValue: 'yes',
      defaultValue: 'undefined',
    },
    {
      parameter: 'pill',
      description: 'Define a rounded button',
      type: 'Parameter',
      optionalValue: 'yes',
      defaultValue: 'undefined',
    },
    {
      parameter: 'outline',
      description: 'Define a outline button',
      type: 'Parameter',
      optionalValue: 'yes',
      defaultValue: 'undefined',
    },
  ];

  const basic = `
    <Button />
    <Button text="click here" />
  `;

  const colored = `
    <Button color="blue" />
    <Button hover="yellow" />
    <Button active="red" />
    <Button color="blue" hover="yellow" active="red" />
  `;

  const sizes = `
    <Button small />
    <Button big />
  `;

  const pill = `
    <Button pill />
    <Button pill text="Click here" />
  `;

  const outline = `
    <Button outline />
    <Button outline color="blue" />
    <Button outline color="blue" hover="yellow" />
    <Button outline color="blue" hover="yellow" active="red" />
  `;
</script>

<div class="content">
  <h2>Button</h2>
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
    <Button />
    <Button text="Click here" />
  </div>
  <pre>
    <code>{basic}</code>
  </pre>

  <h5>Colored</h5>
  <div class="example">
    <Button color="blue" />
    <Button hover="yellow" />
    <Button active="red" />
    <Button color="blue" hover="yellow" active="red" />
  </div>
  <pre>
    <code>{colored}</code>
  </pre>

  <h5>Sizes</h5>
  <div class="example">
    <Button small />
    <Button big />
  </div>
  <pre>
    <code>{sizes}</code>
  </pre>

  <h5>Pill</h5>
  <div class="example">
    <Button pill />
    <Button pill text="Click here" />
  </div>
  <pre>
    <code>{pill}</code>
  </pre>

  <h5>Outline</h5>
  <div class="example">
    <Button outline />
    <Button outline color="blue" />
    <Button outline color="blue" hover="yellow" />
    <Button outline color="blue" hover="yellow" active="red" />
  </div>
  <pre>
    <code>{outline}</code>
  </pre>
</div>
