<template>
  <div class="profile">
      <div class="container mt-4">
        <div class="row" style="text-align: left;">
          <div class="col-6">
            <h2>Persönliche Daten</h2>
            <p><strong>Vorname</strong></p>
            <p> {{ user.firstName }}</p>
            <p><strong>Nachname</strong></p>
            <p>{{ user.lastName }}</p>
            <p><strong>Email</strong></p>
            <p> {{ user.email }}</p>
          </div>
          <div class="col-6">
            <h2>Adressdaten</h2>
            <p><strong>Adresse</strong></p>
            <p> {{ user.address }} </p>
            <p><strong>Postleitzahl</strong></p>
            <p> {{ user.plz }} </p>
          </div>
        </div>
        <!-- <div v-for="euser in user" :key="euser.id">
          <div>
            <p>Id: {{ euser.id }}</p>
            <p>-- {{ euser.firstName }} --</p>
            <p>{{ euser.lastName }}</p>
          </div>
        </div> -->
        <button
          data-bs-toggle="modal"
          class="btn btn-primary p-2 shadow fs-4 fw-bold"
          data-bs-target="#profilButton"
        >
          Daten ändern
        </button>
        <ProfileModal
          :vorname = vorname 
          :nachname = nachname
          :email = email
          :adresse = adresse
          :plz = plz
          id="profilButton"
        />
      </div>
    </div>
</template>


<script>
import ProfileModal from "../components/ProfileModal.vue";

export default {
  name: 'Profile',
  components:{
    ProfileModal,
  },
  created(){
    this.$store.dispatch('getUsers');
  },
  props: {
    vorname: {
      type: String,
      default: "Max"
    },
    nachname: {
    type: String,
    default: "Mustermann"
    },
    email: {
      type: String,
      default: "musterman@gmail.com"
    },
    adresse: {
      type: String,
      default: "Stephansplatz 1"
    },
    plz: {
      type: Number,
      default: 1010
    }
  },
  computed: {
    user(){
      console.log(this.$store.state.user);
      return this.$store.state.user;
    }
  },
};
</script>
