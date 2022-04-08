import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const baseLink = 'http://localhost:8081';

function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    auctions: [],
    offers: [],
    pastAuctions: [],
    activeAuctions: [],
    products: ['{\n"Id": 26,\n"name": "testprodttukt1",\n "productpic": "",\n"description": null,\n "contents": 3,\n"category": null,\n "id": 26 \n}'],
    user: {
      "id": 1,
      "firstName": "Max",
      "lastName": "Mustermann",
      "email": "example@mail.com",
      "address": "123 Straße",
      "locked": "false",
      "roles": "USER",
      "profilepic": "logo.png"
    },
    users: [],
    uoffers:[],
    accessToken: '',
    refreshToken: '',
    role: ''
  },
  mutations: {
    updateAuctions(state, auctions) {
      // first of all, reset auctions:
      state.pastAuctions = [];
      state.activeAuctions = [];
      state.auctions = [];
      /**
       * Auctions splitten (Vergangene vs. Aktive)
       */
      let currentDate = new Date();
      // for auction in auctions:
      auctions.forEach(auction => {
        console.log("Die Ganze Auktion: " + auction.id);

        // default images
        if (auction.image_url == undefined || auction.image_url == '') {
          auction.image_url = "https://media.istockphoto.com/vectors/missing-rubber-stamp-vector-vector-id1213374148?k=20&m=1213374148&s=612x612&w=0&h=A3_Ku27Jf_XRfsWCZYvwJWQGNR2hbHDh9ViLLaAdJ5w=";
          console.log("Fall Back Bilder");
          // fallback bilder
          const auctions_products = {
            fanta:
              "https://www.pngplay.com/wp-content/uploads/12/Fanta-PNG-Photos.png",
            cola: "https://www.pngplay.com/wp-content/uploads/9/Coca-Cola-Transparent-Images.png",
            beer: "https://www.pngplay.com/wp-content/uploads/4/Beer-Transparent-Free-PNG.png",
            bier: "https://www.pngplay.com/wp-content/uploads/4/Beer-Transparent-Free-PNG.png",
            sprite:
              "https://www.pngplay.com/wp-content/uploads/4/Sprite-Background-PNG-Image.png",
            vodka: "https://www.pngplay.com/wp-content/uploads/12/Vodka-Transparent-Images-Clip-Art.png",
          };

          for (const [key, value] of Object.entries(auctions_products)) {
            if (key.toLowerCase().includes(auction.product.toLowerCase())) {
              auction.image_url = value;
            }
          }
        }

        // if startime isset
        if (auction.endTime !== null) {
          let auctionEndTime = new Date(auction.endTime);
          if (auctionEndTime < currentDate) {
            // dann ist es eine vergangene auktion
            console.log("Verganene Auktion: " + auction.endTime);
            state.pastAuctions.push(auction);
          }
          else {
            console.log("auction submitted");
            // dann ist es eine aktive auktion
            state.activeAuctions.push(auction);
          }
        }
        else {
          console.log("Diese Auktion hat kein Startdatum:" + auction.id);
        }
        state.auctions.push(auction);
      });
    },
    updateProducts(state, products) {
      state.products = products;
    },
    updateOffers(state, offers) {
      state.offers = offers;
    },
    updateUOffers(state, offers) {
      state.uoffers = offers;
    },
    updateUsers(state, users) {
      state.users = users;
    },
    updateRole(state, role) {
      state.role = role;
    },
    updateUserProfile(state, userProfile) {
      state.user = userProfile;
      if (userProfile.userPicture == null) { state.user.userPicture = 'logo.png'; }
    },
    patchUserProfile(state, userProfile) {
      state.user = userProfile;
      if (userProfile.userPicture == null) { state.user.userPicture = 'logo.png'; }
    },
    getUserById(state, userProfile) {
      state.user = userProfile;
    },
    updateTokens(state, tokens) {
      state.accessToken = tokens.access_token;
      state.refreshToken = tokens.refresh_token;
    },
    updateAccessToken(state, token) {
      state.accessToken = token;
    },
    updateLoginState(state, loggedIn) {
      state.loggedIn = loggedIn;
    },
    logout(state) {
      state.loggedIn = false;
      state.accessToken = '';
      state.refreshToken = '';
      sessionStorage.clear();
      window.location.href = "/access";
    },
    updateUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async getOffers({ commit, state }) {
      const offers = await axios.get(baseLink + '/offers', { headers: { Authorization: `Bearer ${state.accessToken}` } });
      if (!offers) { console.log('Could not retrieve data from API'); }
      commit('updateOffers', offers.data);
    },

    async getAuctions({ commit, state }) {
      const auctions = await axios.get(baseLink + '/auctions', { headers: { Authorization: `Bearer ${state.accessToken}` } });
      if (!auctions) { console.log('Could not retrieve data from API'); }
      commit('updateAuctions', auctions.data);
    },
    async getProducts({ commit, state }) {

      const products = await axios.get(baseLink + '/products/all/', { headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtLXdlQGV3cncuZmF0Iiwicm9sZXMiOiJVU0VSIiwibmFtZSI6Im0td2VAZXdydy5mYXQiLCJpc3MiOiJEcmlua01hcmtldCIsImV4cCI6MTY0MjYxNTMyNn0.vhO_wCweQEAc-yXMg45HWZ7aXRZEM6ncb-VIBHQ7bi4` } });
      if (!products) { console.log('Could not retrieve data from API'); }
      commit('updateProducts', products.data);
    },
    async updateProduct({ commit, state}, product){
      console.log("itsa me");
      console.log("pid:", product.id);
      await axios.put(baseLink + "/products/" + product.id, product, {
        headers: { Authorization: `Bearer ${state.accessToken}` }
      }).then( 
        (response) => {
          this.dispatch('getProducts');
        }
      )
    },
    async getUsers({ commit, state }) {
      const users = await axios.get(baseLink + '/user', { headers: { Authorization: `Bearer ${state.accessToken}` } });
      if (!users) { console.log('Could not retrieve data from API'); }
      commit('updateUsers', users.data);
    },
    async getAllUsers({ commit, state }) {
      const users = await axios.get(baseLink + '/user', { headers: { Authorization: `Bearer ${state.accessToken}` } })
        .then((response) => {
          commit('updateUsers', response.data);
          console.log("Daten:");
          console.log(response.data);
        }).catch((error) => {
          console.log('Could not retrieve data from API! \n Response: ' + error.response.status);
        });
    },
    async getUserById({ commit, state }, id) {
      await axios.get(baseLink + `/user/${id}`, { headers: { Authorization: `Bearer ${state.accessToken}` } })
        .then((response) => {
          console.log(`textual response in call: ${response}`);
          commit('getUserById', response.data);
        }).catch((response) => {
          console.log(`Could not retrieve data from API - Response code: ${response}`);
        });
    },
    async getOffersForUser({ commit, state }, id){
      console.log("Id I'm trying: " + id)
      await axios.get(baseLink + `/offers/byUser/${id}`, { headers: { Authorization: `Bearer ${state.accessToken}` } })
        .then((response) => {
          console.log("offers: ", response.data);
          commit('updateUOffers', response.data);
        }).catch((response) => {
          console.log(`Could not retrieve data from API - Response code: ${response}`);
        });
    },
    async getOffersForAuction({ commit, state }, id){
      await axios.get(baseLink + `/offers/bybyAuction/38`, { headers: { Authorization: `Bearer ${state.accessToken}` } })
        .then((response) => {
          console.log("offers: ", response.data);
          commit('updateUOffers', response.data);
        }).catch((response) => {
          console.log(`Could not retrieve data from API - Response code: ${response}`);
        });
    },
    async deleteUser({ commit, state }, id) {
      console.log(`Versuche User mit der ID ${id} zu löschen`);
      console.log("link = " + baseLink + `/user/${id}`);
      await axios.delete(baseLink + `/user/${id}`, { headers: { Authorization: `Bearer ${state.accessToken}` } })
        .then((response) => {
          console.log('User ' + response.data.firstName + ' gelöscht')
        }).catch((response) => {
          console.log(`löschen fehlgeschlagen, Fehler-code: ${response}`);
        });
    },
    async getUserData({ commit, state}, mail){
      await this.dispatch("getAllUsers");
      this.state.users.forEach(iuser => {
        if(iuser.email == mail ){
          commit('updateUser', iuser);
          console.log("mail: ", iuser.email, " id: ", iuser.id);
        }
      });
      console.log(this.state.user);
    },
    async loginUser({ commit, state }, userObj) {
      console.log("Trying to log in user with Email: " + userObj.email);
      await axios.post(baseLink + "/auth", userObj)
        .then((response) => {
          if (response.status == 200) {
            commit('updateLoginState', true);
            commit('updateAccessToken', response.data);
            const jwtDetails = parseJwt(response.data);
            console.log(jwtDetails);
            this.dispatch('getUserData', jwtDetails.name);
            commit('updateRole', jwtDetails.roles);
          }
          else {
            console.log("Probiers nochmal!");
            commit('updateLoginState', false);
          }
        })
        .catch((error) => {
          if (error.response.status == 400) {
            // handle 400
            console.log("Email stimmt nicht");
          }
          else {
            // error others
            console.log("Ein unerwartetes Problem ist aufgetreten, bitte versuchen Sie es in einigen Minuten erneut.");
          }
        });
    },
    async registerUser({ commit, state }, registerObj) {
      await axios
        .post(baseLink + "/user", registerObj)
        .then(response => {
          if (response.status == 201) {
            this.responseMessage = "Registrierung erfolgreich";
            commit('updateLoginState', true);
            commit('updateAccessToken', response.data);
          }
          console.log("Seems to have worked!");

          // expecting token from response
          console.log(response.data);
        })
        .catch(reason => {
          if (reason.response.status === 400) {
            // handle 400
            console.log("Es gibt einen Syntax Error, überprüfe deine Eingabe");
          } else {
            // error others
            console.log("Ein unerwartetes Problem ist aufgetreten, bitte versuchen Sie es in einigen Minuten erneut.");
          }
        });
    },
    async submitForm({ commit, state }, formdata) {
      await axios
        .put(baseLink + "/user/" + this.state.user.id, formdata, {
          headers: { Authorization: `Bearer ${state.accessToken}` }
        })
        .then((res) => {

          console.log("Die ID: ");
          console.log(res.data);
          this.offers = res.data;
        })
        .catch((err) => console.log(err));
    },
    async createAuction({ commit, state }, auction) {
      await axios.post(baseLink + "/auctions/", auction, {
        headers: { Authorization: `Bearer ${state.accessToken}` }
      })
        .then((res) => {
          console.log("Erfolgreich")

        })
        .catch((err) => console.error("da ist was schiefgelaufen: ", err))
    }
    ,
    async createOffer({ commit, state }, offer) {
      await axios.post(baseLink + "/offers/", offer, {
        headers: { Authorization: `Bearer ${state.accessToken}` }
      })
        .then((res) => {
          console.log("offer created and submitted sucessfully to backend")
        })
        .catch((err) => console.error("error caught whilst submitting create offer: ", err))
    },
    async updateOffer({ commit, state }, offer) {
      await axios.put(baseLink + "/offers/" + offer.id, offer, {
        headers: { Authorization: `Bearer ${state.accessToken}` }
      })
        .then((res) => {
          console.log("offer submitted sucessfully to backend")
        })
        .catch((err) => console.error("error caught whilst submitting offer: ", err))
    },

    async refreshAuctions({ commit, state }, idToLoad) {
      await axios.get(baseLink + `/offers/byAuction/${idToLoad}`, {
        headers: { Authorization: `Bearer ${state.accessToken}` }
      })
        .then((res) => {
          console.log('Auktionen für ID: ', idToLoad, ' aktualisiert');
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  },
  modules: {
  },
});
