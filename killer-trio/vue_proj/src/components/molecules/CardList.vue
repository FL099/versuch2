<template>
  <div class="row">
    <div class="d-flex flex-wrap justify-content-center" height="200">
      <div v-bind:key="auction.id" v-for="auction in auctions">
        <OfferCard class="m-2"  :auction="auction" :name="auction.product"/>
      </div>
    </div>
  </div>
</template>

<script>
import OfferCard from './OfferCard.vue';

export default {
  name: 'CardList',
  components: {
    OfferCard,
  },
  props: ['auctions'],
};
</script>

<style>
</style>
