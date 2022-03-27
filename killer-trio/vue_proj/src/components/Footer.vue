<template>
    <div class="container">
   <footer class="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 border-top">
        <router-link to="/impressum" class="nav-link col-md-4 mb-0 text-muted text-start">
        ©2022 DrinkMarket</router-link>

        <ul class="nav col-md-4 justify-content-end">
        <li>
            <router-link to="/about" class="nav-link px-2 text-muted">About</router-link>
        </li>
        <li>
            <router-link to="/help" class="nav-link px-2 text-muted">Help</router-link>
        </li>
        <li>
            <router-link to="/impressum" class="nav-link px-2 text-muted">Impressum</router-link>
        </li>
        </ul>
    </footer>
    </div>
</template>

<script>

export default {
  name: 'Footer',
};
</script>

<style scoped>
    footer{
        bottom: 0;
    }
</style>
