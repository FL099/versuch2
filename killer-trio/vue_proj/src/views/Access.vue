<template>
  <div class="container px-4">
    <Greeting
      title="Anmelden und los geht's"
      subtitle="Mach dir schnell einen Account wenn du noch keinen hast!"
    />
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="login-tab"
          data-bs-toggle="tab"
          data-bs-target="#login"
          type="button"
          role="tab"
          aria-controls="login"
          aria-selected="true"
        >
          Login
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="register-tab"
          data-bs-toggle="tab"
          data-bs-target="#register"
          type="button"
          role="tab"
          aria-controls="register"
          aria-selected="false"
        >
          Register
        </button>
      </li>
    </ul>
    <div class="tab-content" id="tab-content">
      
      <div
        class="tab-pane fade show active"
        id="login"
        role="tabpanel"
        aria-labelledby="login-tab"
      >
        <Login class="content"/>
      </div>
      <div
        class="tab-pane fade"
        id="register"
        role="tabpanel"
        aria-labelledby="register-tab"
      >
        <Register class="content"/>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../components/molecules/Login.vue';
import Register from '../components/molecules/Register.vue';
import Greeting from '../components/molecules/Greeting.vue';

export default {
  name: 'Access',
  components: {
    Login,
    Register,
    Greeting,
  },
};
</script>

<style>
</style>
