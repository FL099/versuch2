<template>
    <div class="px-4">
        <h1>Produkte</h1>
        <div>
        <div class="p-2">
        Auf dieser Seite werden sämtliche Produkt Kategorien aufgezeigt. <br />
        Auch in jedem der Produktbeschreibungen findet sich eine Liste mit
        Beispiel-Produkten aus diesem Segment.

        </div>
        <table class="table">
          <thead>
                    <tr>
                        <td>Id</td>
                        <td>Produkt</td>
                        <td>Menge</td>
                        <td>Kategorie</td>
                        <td>Maximalmenge</td>
                        <td>Verwalten</td>
                    </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.Id">
              <td>{{ product.Id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.contents }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.maxAmount }}</td>
              <td>
                <button class="btn badge rounded-pill bg-secondary" data-bs-toggle="modal" :data-bs-target="'#change' + product.id">
                  ⚙️
                </button>

                  <ProduktModal
                    :name = product.name
                    :contents = product.contents
                    :description = product.description
                    :category = product.category
                    :id= "'change' + product.id"
                    />
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
  name: 'Produkte',
  components:{
ProduktModal,
  },
  created(){
    this.$store.dispatch('getProducts');

  },
  computed:{
    products(){
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
    h2{
        text-align: left;
    }
</style>
