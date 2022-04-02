<template>
  <div class="container" style="padding-top: 60px">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-4">
        <div>
          <img class="img-fluid" :src="auction.image_url" :alt="auction.product" />
          <br />
          <h6 class="badge rounded-pill bg-secondary">User: {{ user }}</h6>
        </div>
      </div>
      <div class="col-6 d-flex justify-content-center flex-column text-start p-4">
        <h1 class="fw-bold fs-1">{{ auction.product.toUpperCase() }}</h1>
        <p class="fs-3">Mindestangebot: €{{ this.auctionMinPrice + ",00"}}</p>
        <div v-if="this.$store.state.loggedIn">
          <button
            data-bs-toggle="modal"
            class="btn btn-primary p-2 shadow fs-4 fw-bold"
            data-bs-target="#bietenButton"
          >{{ "AUF " + auction.product.toUpperCase() + " BIETEN" }}</button>
          <Modal
            :title="this.auction.product"
            :text="'offerexampletest'"
            :btnText="'Bid Now'"
            :minPrice="this.auctionMinPrice"
            id="bietenButton"
          />
        </div>
      <div v-else>
        <router-link to="/access" class="nav-link">Login zum Bieten</router-link>
      </div>
    </div>
    </div>
    <div v-bind:key="offer.id" v-for="offer in this.offers">
      <Offer class="m-2" :price="offer.price" :amount="offer.amount" />
    </div>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';
import AuctionModal from '../components/AuctionModal.vue';
import Picture from '../components/atoms/Picture.vue';
import OfferCard from '../components/molecules/OfferCard.vue';
import Offer from '../components/molecules/Offer.vue';

export default {
  name: "CardView",
  components: {
    Modal,
    AuctionModal,
    Picture,
    OfferCard,
    Offer
  },
  props: {
    product_id: {
      type: String
    },
    product: {
      type: String,
      default: "Getränkename"
    },
    description: {
      type: String,
      default: "this is the product description"
    },
    product_category: {
      type: String,
      default: "Bier"
    },
    pic_url: {
      type: String,
      default: "logo.png"
    },
    product_h_bid: {
      type: Number,
      default: 0.0
    },
    user: {
      type: String,
      default: "BeverageBidder56"
    }
  },
  data() {
    return {
      auction: {
        product: "Test",
        offers: null
      },
      auctionMinPrice: 1
    };
  },
  created() {
    // link not working, todo: load specific id again
    this.$store.dispatch("getOffers");
    this.offers = null;
    console.log("Card View erstellt");
    const fullPath = this.$router.currentRoute.path; // "/items/23";
    const splittedFullPath = fullPath.split("/items/");
    const idToLoad = splittedFullPath[1];

    this.$store.state.auctions.forEach(auction => {
      if (auction.id == idToLoad) {
        this.auction = auction;
        this.user = auction.creatorId;
      }
    });

    let minOfferPrice = this.auction.minPrice ?? 0;

    this.$store.state.offers.forEach((offer) => {
      console.log(offer.auctionId);
      if (offer.auctionId == idToLoad) {
        console.log("Match: " + idToLoad);
        if (offer.price > minOfferPrice) {
          // do something
          minOfferPrice = offer.price;
        }
      }
    });
    console.log("Mindestangebot: " + minOfferPrice);
    this.auctionMinPrice = minOfferPrice;
    var _this = this.$store;
    // load offers from store
    var refresher = setInterval(function () {
      _this.dispatch('refreshAuctions', idToLoad);
    }, 30000);
  },
};
</script>
