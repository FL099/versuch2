<template>
    <div class="container">
        <h1>Admin Page</h1>
        <h2>User Übersicht</h2>
        <table class="table">
          <thead>
                    <tr>
                        <td>Id</td>
                        <td>Vorname</td>
                        <td>Nachname</td>
                        <td>Email</td>
                        <td>PLZ</td>
                        <td>Verwalten</td>
                    </tr>
          </thead>
          <tbody >
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.plz }}</td>
              <td>
                <button v-if="user.locked" v-on:click="lockUser(user)" class="btn badge rounded-pill bg-success">
                  🔓
                </button>
                  <button v-else v-on:click="lockUser(user)" class="btn badge rounded-pill bg-warning">
                      🔒
                  </button>
                  &nbsp;
                  <button v-on:click="deleteUser(user.id)" class="btn badge rounded-pill bg-danger">
                      X
                  </button>
                  &nbsp;
                  <button class="btn badge rounded-pill bg-secondary" data-bs-toggle="modal" :data-bs-target="'#change' + user.id">
                      ⚙️
                  </button>
                  <ProfileModal
                    :vorname = user.vorname 
                    :nachname = user.nachname
                    :email = user.email
                    :address = user.address
                    :plz = user.plz
                    :id= "'change' + user.id"
                    />
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
import ProfileModal from "../components/ProfileModal.vue";

export default {
    name: "Admin",
    components:{
    ProfileModal,
  },
  created(){
    this.$store.dispatch('getAllUsers');

  },
  computed:{ 
    users(){
      console.log("Übersicht: " + this.$store.state.users[0]);
      return this.$store.state.users;
    },
  },
  methods: {
      deleteUser(id){
          this.$store.dispatch('deleteUser', id);
          this.$store.dispatch('getAllUsers');  
      },
      lockUser(user){
        if(user.locked == true)
        {
          user.locked = false
        }
        else{
          user.locked = true
        }

          this.$store.dispatch('lockUser', user);
          this.$store.dispatch('getAllUsers');  
      }
  }
}
</script>

<style>

</style>