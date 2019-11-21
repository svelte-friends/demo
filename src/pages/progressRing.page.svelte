<script>
  import ProgressRing from '@packages/shared/progressRing.svelte';

  let codeDemoBasic = `
  <ProgressRing />
  <ProgressRing text="Loading file..." />

  `;

  let codeDemoSize = `
   <ProgressRing small/>
   <ProgressRing big/>
  `;

  let codeDemoDeterminate = `
  <ProgressRing type="determinate" percent={100} color="red" colorText="red" small />
  <ProgressRing type="determinate" percent={60} color="green" colorText="green" big />
  `;

  let attributes = [
    {
      parameter: 'small',
      description: 'We use to define a size.',
      type: 'Bolean',
      optionalValue: 'true',
      defaultValue: 'false',
    },
    {
      parameter: 'big',
      description: 'We use to define a size.',
      type: 'Bolean',
      optionalValue: 'true',
      defaultValue: 'false',
    },
    {
      parameter: 'text',
      description: 'We use to define a text.',
      type: 'String',
      optionalValue: 'true',
      defaultValue: 'Loading',
    },
    {
      parameter: 'colorText',
      description: 'We use to define a color.',
      type: 'String',
      optionalValue: 'true',
      defaultValue: '#0b0e1e',
    },
    {
      parameter: 'color',
      description: 'We use to define a color for progress.',
      type: 'String',
      optionalValue: 'true',
      defaultValue: '#624695',
    },
    {
      parameter: 'type',
      description: 'We use to define a type. indeterminate or determinate.',
      type: 'String',
      optionalValue: 'true',
      defaultValue: 'indeterminate',
    },
    {
      parameter: 'percent',
      description:
        'We use to define the percent for progress, only applicable for determinate type.',
      type: 'Integer',
      optionalValue: 'false',
      defaultValue: 'Min: 0 and Max: 100',
    },
  ];
</script>

<div class="content">
  <h2>Progress Ring</h2>
  <p>Progress component use to load in your pages.</p>
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
            <code class="highlighter-rouge">{item.defaultValue}</code>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <h5>Progress indeterminate</h5>
  <div class="example">
    <div>
      <ProgressRing />
    </div>
    <div>
      <ProgressRing text="Loading file..." />
    </div>
  </div>
  <pre>
    <code>{codeDemoBasic}</code>
  </pre>

  <h5>Progress indeterminate size</h5>
  <div class="example">
    <div>
      <ProgressRing small />
    </div>
    <div>
      <ProgressRing big colorText="#675c5ccc" text="Loaging..." />
    </div>
  </div>
  <pre>
    <code>{codeDemoSize}</code>
  </pre>

  <h5>Progress determinate</h5>
  <div class="example">
    <div>
      <ProgressRing
        type="determinate"
        percent={100}
        color="red"
        colorText="red"
        small />
    </div>
    <div>
      <ProgressRing
        type="determinate"
        percent={60}
        color="green"
        colorText="green"
        big />
    </div>
  </div>
  <pre>
    <code>{codeDemoDeterminate}</code>
  </pre>

</div>
