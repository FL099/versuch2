<template>
  <div
    class="modal fade"
    id="auctionModal"
    tabindex="-1"
    aria-labelledby="auctionModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="AuctionModalLabel">{{title}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- categorical value not needed atm
          <label for="categoryId" class="col-form-label">Enter Category Id:</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" id="categoryId" placeholder="Enter Category Id."
                   v-model="categoryId" required>
          </div>
          -->
          <label for="itemtitle" class="col-form-label">Title:</label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              name="product"
              id="itemtitle"
              placeholder="Enter Title."
              v-model="auction.title"
              required
            />
          </div>

          <!--
          <label for="description" class="col-form-label">Description:</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" id="description" placeholder="Enter Description."
                   v-model="description" required>
          </div>
          -->

          <label for="minPrice" class="col-form-label">Minimum Price:</label>
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              name="minPrice"
              id="minPrice"
              placeholder="Enter Minimum Product Price."
              v-model="auction.minPrice"
              required
            />
          </div>
          <label for="maxPrice" class="col-form-label">Maximum Price:</label>
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              name="maxPrice"
              id="maxPrice"
              placeholder="Enter Maximum Product Price."
              v-model="auction.maxPrice"
              required
            />
          </div>

          <label for="startDateTime" class="col-form-label">Start Date Time:</label>
          <div class="input-group mb-3 date">
            <input
              type="date"
              class="form-control"
              id="startDateTime"
              placeholder="Enter Start Date Time."
              v-model="auction.startDate"
              required
            />
          </div>
          <label for="endDateTime" class="col-form-label">End Date Time:</label>
          <div class="input-group mb-3 date">
            <input
              type="date"
              class="form-control"
              id="endDateTime"
              placeholder="2020-12-31"
              v-model="auction.endDate"
              required
            />

          </div>


          <!--
          <label for="description" class="col-form-label">Description:</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" id="description" placeholder="Enter Description."
                   v-model="value" required>
          </div>
          -->

          <label for="minAmount" class="col-form-label">Minimum Amount:</label>
          <div class="input-group mb-3 date">
            <input
              type="number"
              class="form-control"
              name="minAmount"
              id="minAmount"
              placeholder="Enter Minimum Product Amount."
              v-model="auction.minAmount"
              required
            />
          </div>
          <label for="maxAmount" class="col-form-label">Maximum Amount:</label>
          <div class="input-group mb-3 date">
            <input
              type="number"
              class="form-control"
              name="maxAmount"
              id="maxAmount"
              placeholder="Enter Maximum Product Amount."
              v-model="auction.maxAmount"
              required
            />
          </div>
          <label for="categoryId" class="col-form-label">Photo:</label>
          <div class="input-group mb-3">
            <div class="custom-file">
              <input
                type="file"
                accept="image/png, image/jpeg"
                class="form-control"
                id="photo"
                placeholder="Choose photo"
              />
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" @click="submitAuction" class="btn btn-primary">{{btnText}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auction: {
        title: "",
        minPrice: "",
        maxPrice: "",
        startDate: new Date(),
        endDate: new Date("yyyy-MM-dd"),
        minAmount: "",
        maxAmount: ""
      }
    };
  },

  methods: {
    submitAuction() {
      this.store.dispatch("updateAuctions", this.form);
    }
  },
  name: "AuctionModal",
  props: ["title", "text", "btnText"],
  components: {
  }
};
</script>
