<template>
  <div>
      <router-link :to="{name:'Create'}" class="button is-success">Add New </router-link>
      <table class="table is-striped is-bordered mt-2 is-fullwidth">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th class="has-text-centered">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.productName }}</td>
            <td>{{ item.productPrice }}</td>
            <td> <router-link :to="{name: 'Edit', params:{id: item.id} }" class="button is-info is-small">Edit</router-link>
              <a class="button is-danger is-small" @click="deleteProduct(item.id)">DELETE</a>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>

import axios from "axios";

export default {
  name: "ProductList",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const response = await axios.get('http://localhost:2222/products');
        this.items = response.data
      } catch (err) {
        console.log(err);
      }
    },
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:2222/products/${id}`);
        this.getProducts();
      } catch(err) {
        consol.log(err);
      }
    }
  }
}
</script>
<style>
  
</style>