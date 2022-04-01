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
          <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Starting Price: {{minPrice}}</p>
          <form class="m-5" style="text-align: left;">
           <!--
            <TextInput
              :labelText="'Bid Amount'"
              :helpText="'Highest Bidder receives the product'"
              :type="'number'"
            ></TextInput>
-->
             <label for="minPrice">Bid Price Amount: </label>
            <input type="number" class="form-control" name="minPrice" id="minPrice" v-model="offer.minPrice">

          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">{{btnText}}</button>
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

      },
    };
  },
  name: "Modal",
  // props: ['title', 'text', 'btnText', 'product'],
  props: {
    title: {
      type: String,
      default: "Produkt Angebot1"
    },
    minPrice: {
      type: Number,
      default: "test"
    },
    text: {
      type: String,
      default: "Produkt Angebot2"
    },
    btnText: {
      type: String,
      default: "Produkt Angebot3"
    },
    product: {
      type: String,
      default: "Beer"
    },
    amount: {
      type: Number,
      default: 0
    },
    auctionMinPrice:
    {
      type: Number,
      default: 0
    }
  },
  components: {
TextInput
  }
};
</script>
