<template>
  <div
    class="
      d-flex
      justify-content-between
      border
      rounded
      shadow
      bg-primary
      text-white
    "
  >
    <div class="fs-2 text-end fw-bold w-100">€{{ price }}</div>
    <div class="w-100 text-start">Menge: {{ amount }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: this.price,
      amount: this.amount,
    };
  },
  props: ["price", "amount"],
};
</script>
