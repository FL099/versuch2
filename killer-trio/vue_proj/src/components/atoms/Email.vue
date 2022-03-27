<template>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">{{ labelText }}</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="mm@example.com"
    />
    <div id="emailHelp" class="form-text">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'Email', // beschreibt sich selbst, weil die datei "Email.vue" heißt
  props: ['msg'],
};
</script>
