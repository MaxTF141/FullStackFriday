<template>
  <div>
    <div class="field">
      <label class="label">Product Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="productName"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Price</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="productPrice"
        />
      </div>
    </div>

    <div class="field">
        <label class="label">Description</label>
        <div class="control">
            <input class="input" type="text" placeholder="description" v-model="productDescription"
            />
        </div>
    </div>

    <div class="control">
      <button class="button is=success" @click="saveProducts">SAVE</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "AddProduct",
    data() {
        return {
            productName: "",
            productPrice: "",
            productDescription: " "
        };
    },
    methods: {
        async saveProducts() {
            try {
                await axios.post('http://localhost:2222/products', {
                    productName: this.productName,
                    productPrice: this.productPrice,
                    productDescription: this.productDescription
                });
                this.productName = "";
                this.productPrice = "";
                this.productDescription = "",
                this.$router.push("/");
            } catch (err) {
                console.log(err);
            }
        }
    },
}
</script>
<style></style>
