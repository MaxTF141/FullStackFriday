<template>
    <div>
        <div class="field">
            <label class="label">Product Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Product Name" v-model="productName">
            </div>
        </div>
        
        <div class="field">
            <label class="label">Price</label>
            <div class="control">
                <input class="input" type="text" placeholder="Price" v-model="productPrice">
            </div>
        </div>
        
        <div class="field">
            <label class="label">Description</label>
            <div class="control">
                <input class="input" type="text" placeholder="Description" v-model="productDescription">
            </div>
        </div>
        <div class="control">
            <button class="button is-success" @click="updateProduct">UPDATE</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'EditProduct',
    data() {
        return {
            productName: '',
            productPrice: '',
            productDescription: '',
        };
    },
    created() {
        this.getProductById();
    },
    methods: {
        async getProductById() {
            try {
                const response = await axios.get(`http://localhost:2222/products/${this.$route.params.id}`);
                this.productName = response.data.productName;
                this.productPrice = response.data.productPrice;
                this.productDescription = response.data.productDescription;
            } catch (err) {
                console.log(err);
            }
        },
        async updateProduct() {
            try {
                await axios.put(`http://localhost:2222/products/${this.$route.params.id}`, {
                    productName: this.productName,
                    productPrice: this.productPrice,
                    productDescription: this.productDescription,
                });
                this.productName = '',
                this.productPrice = '',
                this.productDescription = '',
                this.$route.push('/');
            } catch (err) {
                console.log(err);
            }
        }
    },
}
</script>
<style>
    
</style>