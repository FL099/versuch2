<template>
  <div id = "auktion">
    <form>
      <div>
        <label for="bezeichnung"> Bezeichnung</label>
      </div>
      <div>
        <input id="bezeichnung" name="bezeichnung"
        v-model = "form.values.bezeichnung"
        @blur="validate('bezeichnung')">
      </div>
    </form>
  </div>
</template>

