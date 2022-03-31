<template>
  <div class="py-3">
    <h2>Login - Anmelden</h2>
    <p>
      Mega nice dass du schon einen Account hast, nur noch anmelden und los
      geht's
    </p>
    <form class="m-5" style="text-align: left;">
      <label for="email">Email</label>
      <input type="text" class="form-control" name="email" id="email" v-model="form.email" placeholder="some@1.at">
      
      <label for="password">Passwort</label>
      <input type="text" class="form-control" name="password" id="password" v-model="form.password" placeholder="1234">

      <!--<TextInput
        :labelText="'Email'"
        :helptText="'this is your email'"
        :type="'email'"
        :value.sync="form.email"
      >
      </TextInput>

      <TextInput
        :labelText="'Dein Passwort'"
        :helpText="'Passwort sollte sicher und gemerkt sein'"
        :type="'password'"
        :value.sync="form.password"
      >
      </TextInput>-->

      <div class="mb-3">
        <input type="checkbox" class="form-check-input me-2" id="Logincheck" />
        <label class="form-check-label" for="Logincheck"
          > Eingeloggt bleiben</label
        >
      </div>
      <button type="submit" v-on:click="loginUser" class="btn btn-primary">Login</button>
      <p class="text-primary">{{ responseMessage }}</p>
    </form>
  </div>
</template>

<script>
import TextInput from '../atoms/TextInput.vue';

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      responseMessage: this.responseMessage,
    }
  },
  methods: {
    loginUser() {
      this.$store.dispatch('loginUser', this.form);
    }
  },
  name: 'Login',
  components: {
    TextInput,
  },
};
</script>
