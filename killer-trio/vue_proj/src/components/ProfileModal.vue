<template>
    <div class="modal fade" id="auctionModal" tabindex="-1" aria-labelledby="auctionModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="AuctionModalLabel">Daten ändern</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            </button>
        </div>
        <div class="modal-body">
          <label for="vorname" class="col-form-label">Vorname</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" id="vorname" placeholder:vorname
                   v-model="form.firstName" required>
          </div>
          <label for="nachname" class="col-form-label">Nachname</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" id="nachname" placeholder:nachname
                   v-model="form.lastName" required>
          </div>
          <label for="mail" class="col-form-label">Email</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" id="mail" placeholder:email
                   v-model="form.email" required>
          </div>
          <label for="address" class="col-form-label">Adressdaten</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" id="address" placeholder:adresse
                   v-model="form.address" required>
          </div>
          
          <label for="zipcode" class="col-form-label">Postleitzahl</label>
          <div class="input-group mb-3 date">
            <input type="number" class="form-control" id="zipcode" placeholder:plz
                   v-model="form.plz" required>
          </div>
          

          <label for="categoryId" class="col-form-label">Photo:</label>
          <div class="input-group mb-3">
            <div class="custom-file">
              <input type="file" accept="image/png,image/jpeg" class="form-control" id="photo"
                     placeholder="Choose photo" @change="onPhotoChanged">
            </div>
          </div>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="submitP">Submit</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        plz:'',
        password: '',
      },
      responseMessage: this.responseMessage,
    }
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
      submitP (){
      this.$store.dispatch('submitForm', this.form);        
    }
  },

  name: 'ProfileModal',
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
  components: {
    
  },

}
</script>
