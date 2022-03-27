<template>
  <div>
    <h1 class="fw-bold">{{ title }}</h1>
    <p>
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Greeting',
  props: ['title', 'subtitle'],
};
</script>