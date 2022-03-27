import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const baseLink = "localhost:8081";

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
      "firstName": "Maximus",
      "lastName": "Mustermann",
      "email": "m-we@qwfsderf.fat",
      "address": "123 straße",
      "locked": "false",
      "roles": "USER",
      "profilepic": null
    },
    users: null,
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0dXNlcmVyZXJAdGVzdC5hdCIsInJvbGVzIjoiVVNFUiIsIm5hbWUiOiJ0ZXN0dXNlcmVyZXJAdGVzdC5hdCIsImlzcyI6IkRyaW5rTWFya2V0IiwiZXhwIjoxNjQ0ODcyOTI5fQ.BAVKSYZiphNHnCYV0HM5S6qOhIuRkzD07VzCT5H_Jlk',
    refreshToken: '',
    role: ''
  },
  mutations: {
    updateAuctions(state, auctions) {
    },
    updateProducts(state, products) {
      state.products = products;
    },
    updateOffers(state, offers) {
      state.offers = offers;
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
      state.user = Object.assign(user, state.user);
    },
  },
  actions: {
    async getOffers({ commit, state }) {
      
    },

    async getAuctions({ commit, state }) {
      
    },
    async getProducts({ commit, state }) {

    },
    async getUsers({ commit, state }) {
      
    },
    async getAllUsers({ commit, state }) {
      
    },
    async getUserById({ commit, state }, id) {
      
    },
    async deleteUser({ commit, state}, id){
      
    },
    async loginUser({ commit, state }, userObj) {
      
    },
    async registerUser({ commit, state }, registerObj) {
      
    },
    async submitForm({commit, state}, formdata){
      
    }
  },
  modules: {
  },
});
