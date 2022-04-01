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
                    </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.Id">
              <td>{{ product.Id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.contents }}</td>
              <td>{{ product.category }}</td>
            </tr>
          </tbody>
        </table>
    </div>
    </div>
</template>

<script>

export default {
  name: 'Produkte',
  components:{
    
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
