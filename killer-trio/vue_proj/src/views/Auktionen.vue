<template>
  <div class="px-4">
    <h1>Auktionen</h1>
    <div v-if="this.$store.state.activeAuctions.length > 0">
      <h2>Laufende Auktionen</h2>
      <CardList :auctions="this.$store.state.activeAuctions" />
    </div>
    <div v-if="this.$store.state.pastAuctions.length > 0">
      <h2>Vergangene Auktionen</h2>
      <CardList :auctions="this.$store.state.pastAuctions" />
    </div>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';
import CardList from '../components/molecules/CardList.vue';

export default {
  name: 'Auktionen',
  components: {
    Modal,
    CardList,
  },
  created() {
    this.$store.dispatch('getAuctions');
    console.log(this.$store.state.auctions);
  },
  computed: {
    auctions() {
      return this.$store.state.auctions;
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: left;
}
</style>
