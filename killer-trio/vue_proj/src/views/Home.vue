<template>
  <div class="container home">
    <div
      class="p-5 bg-image grayscale"
      style="
        background-image: url('https://i.pinimg.com/originals/07/72/a0/0772a0b869ef1df9b03fbdc57debf034.jpg');
        background-color: rgba(255, 255, 255, 0.3);
      "
    >
      <div class="d-flex justify-content-center">
        <div
          class="
            w-sm-50
            shadow
            d-flex
            justify-content-center
            flex-column
            p-5
            border
            m-4
          "
          style="background-color: rgba(255, 255, 255, 0.6)"
        >
          <div class="text-center">
            <img
              src="DRINKMARKET.png"
              alt="Drink Market"
              width="400"
              class="d-inline-block align-text-top px-4 py-2"
            />
            <p>
              <em>Der einzigarte Drink Market in Wien</em>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Greeting
      title="Willkommen zum Drink Market"
      subtitle="Hey! Herzlich Willkommen! Bei uns kannst du Getränke verkaufen und dafür bieten."
    />
    <br />
    <CardList :auctions="this.$store.state.auctions" />
    <CardList :offers="this.$store.state.offers" />
  </div>
</template>

<style scoped>
.bg-image {
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
  background-repeat: no-repeat;
}
</style>

<script>
// @ is an alias to /src
import CardList from '../components/molecules/CardList.vue';
import Greeting from '../components/molecules/Greeting.vue';

export default {
  name: 'Home',
  components: {
    CardList,
    Greeting,
  },
  data() {
    return {
      auctions: this.auctions,
    };
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
