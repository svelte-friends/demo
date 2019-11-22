<script>
  export let thead = [];
  export let tbody = [];
</script>

<style>
  .table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 25px;
  }

  .table td,
  .table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .table tr:hover {
    background-color: #ddd;
  }

  .table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #404040;
    color: white;
  }
</style>

<table class="table">
  <thead class="thead-dark">
    <tr>
      {#each thead as item}
        <th>{item}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each tbody as array}
      <tr>
        {#each array as item}
          <td>{item}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
