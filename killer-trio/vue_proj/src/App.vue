<template>
  <div>
    <div id="app">
      <Navbar />
      <router-view style="min-height: 70vh" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import './assets/scripts/bootstrap.min.js';

export default {
  name: 'app',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import './scss/main.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
