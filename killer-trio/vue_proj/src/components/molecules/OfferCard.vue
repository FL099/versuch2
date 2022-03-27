<template>
  <div class="rounded shadow">
    <div class="">
      <div class="p-2">
        <img
          class="img-fluid rounded-start"
          :src="auction.image_url"
          alt="product image"
          height = "100px"
          width="100px"
        />
      </div>
      <div class="">
        <div class="card-body">
          <h5 class="card-title">{{ auction.product }}</h5>
          <router-link
            :to="{ name: 'items', params: { itemNo: auction.id } }"
            class="btn btn-primary"
          >
            Angebot machen</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferCard",
  props: ["auction"],
  // der folgende code wird bei erstellung des components ausgeführt
  created() {
    console.log("Offercard created");
  },
};
</script>
