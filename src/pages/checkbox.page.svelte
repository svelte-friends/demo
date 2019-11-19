<script>
  import CheckBox from '@packages/shared/checkbox.svelte';

  let CheckBoxDemo = `
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
</script>

<div class="content">
  <h2>Checkbox</h2>
  <p>Provide multiple checkboxes for multiple selections.</p>
  <h4>Attributes</h4>
  <!-- Maybe we can add in a table-->
  <ul>
    <li>
      We use the
      <code class="highlighter-rouge">label</code>
      to define a text. Type:
      <code class="highlighter-rouge">string</code>
    </li>
    <li>
      We use the
      <code class="highlighter-rouge">checked</code>
      to define if checked. Type:
      <code class="highlighter-rouge">bolean</code>
    </li>
    <li>
      We use the
      <code class="highlighter-rouge">color</code>
      to define a color ex:
      <code class="highlighter-rouge">#ff0000</code>
      or
      <code class="highlighter-rouge">red, blue ...</code>
      . Type:
      <code class="highlighter-rouge">string</code>
    </li>
    <li>
      We use the
      <code class="highlighter-rouge">disabled</code>
      to define if disabled. Type:
      <code class="highlighter-rouge">bolean</code>
    </li>

  </ul>
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
  <textarea id="code" name="code">{CheckBoxDemo}</textarea>
</div>
