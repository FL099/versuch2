<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Product: {{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h6>Id: {{ offer.id }}</h6>
          <form class="m-5" style="text-align: left;">
            <!--
            <TextInput
              :labelText="'Bid Amount'"
              :helpText="'Highest Bidder receives the product'"
              :type="'number'"
            ></TextInput>
            -->

            <label for="amount">Bid Amount:</label>
            <input
              type="number"
              class="form-control"
              name="amount"
              id="amount"
              v-model="offer.amount"
            />

            <label for="price">Preis</label>
            <input type="number" class="form-control" name="price" id="price" v-model="offer.price" />

            <label for="deliveryDate" class="col-form-label">Delivery Date:</label>
            <div class="input-group mb-3 date">
              <input
                type="date"
                class="form-control"
                id="deliveryDate"
                placeholder="2020-12-31"
                v-model="offer.deliveryDate"
                required
              />
            </div>

            <label for="status">Status: {{offer.status}}</label>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" v-on:click="submitOffer" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "./atoms/TextInput.vue";

export default {
  data() {
    return {
      offer: {
        id: this.tid,
        auctionId: this.auctionId,
        amount: this.amount,
        price: this.price,
        deliveryDate: this.deliveryDate,
        creatorId: this.$store.state.user.id,
        state: this.state
      }
    };
  },
  name: "OfferModal",
  props: {
    offerType: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: " "
    },
    tid: {
      type: Number,
      default: 1
    },
    auctionId: {
      type: Number,
    },
    amount: {
      type: Number,
      default: 1
    },
    price: {
      type: Number,
      default: 1
    },
    deliveryDate: {
      type: String,
      default: "Produkt Angebot3"
    },
    creatorId: {
      type: Number,
    },
    status: {
      type: String,
      default: "Auf Lager"
    }
  },
  components: {
    TextInput
  },
  methods: {
    submitOffer() {
      console.log("this" + this.$store.state.user.id);
      console.log(this.offerType);
      if ((this.offerType == 0)) {
        console.log("type = 0")
        this.$store.dispatch("updateOffer", this.offer);
      } else {
        console.log("type = 1")
        console.log(this.offer);
        this.$store.dispatch("createOffer", this.offer);
      }
    }
  }
};
</script>
