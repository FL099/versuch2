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
            <tr v-for="product in products" :key="product.Id">
              <td>{{ offers.id }}</td>
              <td>{{ offers.auctionId }}</td>
              <td>{{ offers.amount }}</td>
              <td>{{ offers.price }}</td>
              <td>{{ offers.deliveryDate }}</td>
              <td>{{ offers.state }}</td>
              <td>
                <button class="btn badge rounded-pill bg-secondary" data-bs-toggle="modal" :data-bs-target="'#change' + product.id">
                  ⚙️
                </button>

                  <!--<ProduktModal
                    :name = product.name
                    :contents = product.contents
                    :description = product.description
                    :category = product.category
                    :id= "'change' + product.id"
                    />-->
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    </div>
</template>

<script>
import ProduktModal from "../components/ProduktModal.vue";
export default {
  name: 'Offers',
  components:{
    ProduktModal,
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
