<template>
  <nav class="bg-dark shadow mb-3" id="nav">
    <div
      class="
        d-flex
        flex-row
        justify-content-center
        align-items-center
        flex-wrap
      "
    >
      <router-link to="/" class="nav-link">
        <img
          src="DRINKMARKET.png"
          alt="Drink Market"
          width="200"
          class="d-inline-block align-text-top px-4 py-2"
        />
      </router-link>
      <div v-if="!this.$store.state.loggedIn">
        <div
          class="d-flex align-items-center flex-wrap justify-content-center"
          id="navbarText"
        >
          <router-link to="/access" class="nav-link">Anmelden</router-link>
          |
          <router-link to="/auktionen" class="nav-link">Auktionen</router-link>
          |
          <router-link to="/produkte" class="nav-link">Produkte</router-link>
        </div>
      </div>
      <div v-else>
        <div
          class="d-flex align-items-center flex-wrap justify-content-center"
          id="navbarText"
        >
          <router-link to="/auktionen" class="nav-link">Auktionen</router-link>
          |
          <router-link to="/produkte" class="nav-link">Produkte</router-link> |
          <router-link to="/profile" class="nav-link">Profil</router-link> |
          <router-link to="/offers" class="nav-link">Offers</router-link>
          <AuctionModal
            class="my-1"
            :title="'Auction Creation'"
            :text="'exampletest'"
            :btnText="'submit auction'"
            id="auctionModal"
          />

          <button
            data-bs-toggle="modal"
            class="btn btn-primary mx-2"
            data-bs-target="#auctionModal"
          >
            Auction Erstellen
          </button>
          <router-link to="/admin" class="nav-link"><button class="btn btn-success mx-2">Admin</button></router-link>
          <button
          class="btn btn-danger mx-2 position-absolute end-0"
          v-on:click="logout">
            log out
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import AuctionModal from './AuctionModal.vue';

export default {
  name: 'Navbar',
  components: {
    AuctionModal,
  },
  created() {
  },
  methods: {
    logout() {
      this.$store.commit('logout');
    }
  },
};
</script>

<style scoped>
.nav-link {
  color: #fff !important;
}
#nav a.router-link-exact-active {
  color: #0d6efd;
}

#nav {
  padding: 5px;
}
</style>
