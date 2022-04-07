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
          <h5 class="modal-title" id="exampleModalLabel">Id: {{ offer.id }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
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
            <input
              type="number"
              class="form-control"
              name="price"
              id="price"
              v-model="offer.price"
            />

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

            <label for="state">Status</label>
            <input
              type="text"
              class="form-control"
              name="state"
              id="state"
              v-model="offer.state"
            />
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
        //auctionId: this.auctionId,
        amount: this.amount,
        price: this.price,
        deliveryDate: this.deliveryDate,
        //creatorId: this.creatorId,
        state: this.state,
      }
    };
  },
  name: "OfferModal",
  props: {
    tid: {
      type: Number,
      default: 1
    },
    auctionId: {
      type: Number,
      default: 1
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
      default: 1
    },
    state: {
      type: String,
      default: ""
    },
    
  },
  components: {
    TextInput
  },
  methods: {
    submitOffer() {
      this.$store.dispatch("updateOffer", this.offer);
    }
  }
};
</script>
