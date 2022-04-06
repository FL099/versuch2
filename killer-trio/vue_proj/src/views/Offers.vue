<template>
    <div class="px-4">
        <h1>Angebote</h1>
        <div>
        <table class="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Auktion</td>
              <td>Menge</td>
              <td>Preis</td>
              <td>Lieferdatum</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="offer in offers" :key="offer.Id">
              <td>{{ offer.id }}</td>
              <td>{{ offer.auctionId }}</td>
              <td>{{ offer.amount }}</td>
              <td>{{ offer.price }}</td>
              <td>{{ offer.deliveryDate }}</td>
              <td>{{ offer.state }}</td>
              <td>
                <button class="btn badge rounded-pill bg-secondary" data-bs-toggle="modal" :data-bs-target="'#create' +offer.id">
                  ⚙️
                </button>

                  <OfferModal
                    :tid = offer.id
                    :amount = offer.amount
                    :price = offer.price
                    :deliveryDare = offer.deliveryDate
                    :state = offer.state
                    :id = "'create' + offer.id"
                    />
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    </div>
</template>

<script>
import OfferModal from "../components/OfferModal.vue";
export default {
  name: 'Offers',
  components:{
    OfferModal,
  },
  created(){
    this.$store.dispatch('getOffersForUser', this.$store.state.user.id);

  },
  computed:{
    offers(){
      return this.$store.state.uoffers;
    },
  },
};
</script>

<style scoped>
    h2{
        text-align: left;
    }
</style>
