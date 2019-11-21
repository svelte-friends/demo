<script>
  import ProgressBar from '@packages/shared/progressBar.svelte';

  let codeDemoBasic = `
      <ProgressBar value="80" /><br />
      <ProgressBar value="50" />
  `;

  let codeDemoColor = `
      <ProgressBar backgroundColor="red" value="25" /><br />
      <ProgressBar backgroundColor="blue" value="50" /><br />
      <ProgressBar backgroundColor="linear-gradient(268deg, yellow, blue)" value="75" />
  `;

  let codeDemoSize = `
      <ProgressBar value=75/><br />
      <ProgressBar medium value=50/><br />
      <ProgressBar big value=25/>
  `;

  let codeDemoIndeterminate = `
      <ProgressBar indeterminate/>
  `;

  let codeDemoIndeterminateSize = ` 
      <ProgressBar indeterminate/><br />
      <ProgressBar indeterminate medium backgroundColor='blue'/><br />
      <ProgressBar indeterminate big backgroundColor='red'/>
  `;

  let attributes = [
    {
      parameter: 'value',
      description:
        'We use to define the percentage of progress, applicable only for the given type.',
      type: 'Integer',
      optionalValue: 'false',
      defaultValue: 'Min: 0 e Max:100',
    },
    {
      parameter: 'backgroundColor',
      description: 'We use to define a color.',
      type: 'String',
      optionalValue: 'true',
      defaultValue: 'linear-gradient(268deg, #624695, #e1364a)',
    },
    {
      parameter: 'medium',
      description: 'We use to set a size.',
      type: 'Bolean',
      optionalValue: 'true',
      defaultValue: 'false',
    },
    {
      parameter: 'big',
      description: 'We use to set a size.',
      type: 'Bolean',
      optionalValue: 'true',
      defaultValue: 'false',
    },
    {
      parameter: 'indeterminate',
      description: 'We use to define the undetermined type.',
      type: 'Bolean',
      optionalValue: 'true',
      defaultValue: 'false',
    },
  ];
</script>

<div class="content">
  <h2>ProgressBar</h2>
  <p>
    A progress bar can be used to show the user how long he / she is in a process.
  </p>
  <h4>Attributes</h4>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th>Parameter</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional value</th>
        <th>Standard value</th>
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

  <h5>Default ProgressBar with Value</h5>
  <div class="example">
    <div>
      <ProgressBar value="80" />
      <br />
      <ProgressBar value="50" />
    </div>
  </div>
  <pre>
    <code>{codeDemoBasic}</code>
  </pre>

  <h5>ProgressBar colors</h5>
  <div class="example">
    <div>
      <ProgressBar backgroundColor="red" value="25" />
      <br />
      <ProgressBar backgroundColor="blue" value="50" />
      <br />
      <ProgressBar
        backgroundColor="linear-gradient(268deg, yellow, blue)"
        value="75" />
    </div>
  </div>
  <pre>
    <code>{codeDemoColor}</code>
  </pre>

  <h5>ProgressBar size</h5>
  <div class="example">
    <div>
      <ProgressBar value="75" />
      <br />
      <ProgressBar medium value="50" />
      <br />
      <ProgressBar big value="25" />
    </div>
  </div>
  <pre>
    <code>{codeDemoSize}</code>
  </pre>

  <h5>ProgressBar indeterminate Default</h5>
  <div class="example">
    <div>
      <ProgressBar indeterminate />
    </div>
  </div>
  <pre>
    <code>{codeDemoIndeterminate}</code>
  </pre>

  <h5>ProgressBar indeterminate size</h5>
  <div class="example">
    <div>
      <ProgressBar indeterminate />
      <br />
      <ProgressBar indeterminate medium backgroundColor="blue" />
      <br />
      <ProgressBar indeterminate big backgroundColor="red" />
    </div>
  </div>
  <pre>
    <code>{codeDemoIndeterminateSize}</code>
  </pre>

</div>
