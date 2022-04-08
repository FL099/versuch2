<template>
  <div
    class="modal fade"
    id="createProductModal"
    tabindex="-1"
    aria-labelledby="createProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="createProductModalLabel">Create new Product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <label for="name" class="col-form-label">Product Name</label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder:name
              v-model="product.name"
              required
            />
          </div>
          <label for="contents" class="col-form-label">Contents:</label>
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              id="contents"
              placeholder:contents
              v-model="product.contents"
              required
            />
          </div>
          <label for="category" class="col-form-label">Product Category</label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="category"
              placeholder:category
              v-model="product.category"
              required
            />
          </div>
          <label for="description" class="col-form-label">Product Description</label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="description"
              placeholder:description
              v-model="product.description"
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
                @change="onPhotoChanged"
              />
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
export default {
  data() {
    return {
      product: {
        name: this.name,
        category: this.category,
        contents: this.contents,
        description: this.description,
      },
      responseMessage: this.responseMessage
    };
  },
  methods: {
    onPhotoChanged(e) {
      const file = e.target.files[0];
      this.$data.url = URL.createObjectURL(file);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        this.$data.selectedFile = fileReader.result;
      };
    },
    submitP() {
      this.$store.dispatch("submitForm", this.props);
    }
  },

  name: "createProductModal",
  props: {
    name: {
      type: String,
      default: "Prod name"
    },
    contents: {
      type: Number,
      default: 4
    },
    category: {
      type: String,
      default: "Alcohol"
    },
    description: {
      type: String,
      default: "prod description"
    }
  },
  components: {}
};
</script>


