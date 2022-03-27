<template>
  <div class="py-3">
    <h2>Registriere dich bei uns</h2>
    <p>Vollkommen gratis und unverbindlich</p>
    <form class="m-5" style="text-align: left;">
      <TextInput
        :labelText="'Vorname'"
        :helpText="'Darf auch dein Spitzname sein'"
        :provided_inputPlaceholder="'Max'"
        :type="'text'"
        :value.sync="form.firstName"
      ></TextInput>
      <TextInput
        :labelText="'Nachname'"
        :helpText="'Wie er im Buche steht'"
        :provided_inputPlaceholder="'Mustermann'"
        :type="'text'"
        :value.sync="form.lastName"
      ></TextInput>
      <TextInput
        :labelText="'Deine Email'"
        :helpText="'Wir passen gut auf sie auf!'"
        :type="'email'"
        :value.sync="form.email"
      ></TextInput>
      <TextInput
        :labelText="'Passwort erstellen'"
        :helpText="'Wird doppelt verschlüsselt, 1x bei dir und 1x bei uns'"
        :type="'password'"
        :value.sync="form.password"
      ></TextInput>
      <TextInput
        :labelText="'Password bestätigen'"
        :helpText="'Copy & Paste von oben ;)'"
        :type="'password'"
        :value.sync="password_confirm"
      ></TextInput>

      <div class="mb-3">
        <input type="checkbox" class="form-check-input me-2" id="check" />
        <label class="form-check-label" for="check">Eingeloggt bleiben</label>
      </div>
      <div class="mb-3">
        <input type="checkbox" class="form-check-input me-2" id="agbCheck" required />
        <label class="form-check-label" for="agbCheck">
          <a href="#!">AGB</a> akzeptieren
        </label>
      </div>
      <div class="mb-3">
        <div class="custom-file">
          <input
            type="file"
            accept="image/png, image/jpeg"
            class="form-control"
            id="photo"
            placeholder="Choose photo"
            @change="onPhotoChanged"
          />
        </div>
      </div>
      <button type="submit" v-on:click="registerUser" class="btn btn-primary">Registrieren</button>
      <p class="text-primary">{{ responseMessage }}</p>
    </form>
  </div>
</template>

<script>
import TextInput from "../atoms/TextInput.vue";

export default {
  name: "Register",
  /*created() {
    this.form.firstName = "";
    this.form.lastName = "";
    this.form.email = "";
    this.userPwd = "";
    this.password_confirm = "";
    this.responseMessage = "";
  },*/
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '@example.com',
        password: '',
        profilepic: ''
      },
      
      password_confirm: '',
      responseMessage: ''
    };
  },
  components: {
    TextInput
  },
  methods: {
    onPhotoChanged(e) {
      const file = e.target.files[0];
      this.$data.url = URL.createObjectURL(file);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        this.$data.selectedFile = fileReader.result;
        // console.log('imageAsBase64String: ', this.$data.selectedFile);
      };
    },
    registerUser() {
      this.$store.dispatch('registerUser', this.form);
      
    }
  }
};
</script>
