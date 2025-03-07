<script setup lang="ts">
import ProductDetails from './ProductDetails.vue';
import ProductExport from './ProductExport.vue';
import ProductForm from './ProductForm.vue';
import ProductList from './ProductList.vue';
import ProductSearch from './ProductSearch.vue';
import { type Product, defaultProductList } from '../scripts/product';
import { ref, watch } from 'vue';

const products = ref<Product[]>(defaultProductList)
let nextId = defaultProductList.length + 1

const formProduct = ref<Product | null>(null)
const detailProduct = ref<Product | null>(null)
const visibleProductList = ref(products.value)

function addProduct(newProduct: Product) {
    newProduct.id = nextId
    nextId++
    products.value.push(newProduct)
}
function modifyProductCall(modifyId: number) {
    products.value.forEach(product => {
        if (product.id === modifyId) {
            formProduct.value = product
        }
    })
}
function deleteProduct(deleteId: number) {
    products.value = products.value.filter(product => { return product.id !== deleteId })
}

function modifyProduct(modifiedProduct: Product) {
    products.value.forEach(product => {
        if (product.id === modifiedProduct.id) {
            let index = products.value.findIndex(i => {return i === product})
            products.value[index] = modifiedProduct
        }
    })
    cancelModify()
}
function cancelModify() {
    formProduct.value = null
}

function duplicateProduct(duplicateId: number) {
    products.value.forEach(product => {
        if (product.id === duplicateId) {
            let duplicateProduct: Product = {
                id: nextId,
                name: product.name,
                description: product.description,
                price: product.price,
                stock: product.stock
            }
            nextId++
            products.value.push(duplicateProduct)
            modifyProductCall(duplicateProduct.id)
        }
    })
}

function detailProductCall(detailId: number) {
    products.value.forEach(product => {
        if (product.id === detailId) {
            detailProduct.value = product
        }
    })
}

function searchProducts(searchField: string) {
    if (searchField === "") {
        visibleProductList.value = products.value
    }
    else {
        visibleProductList.value = products.value.filter(product => {
            return product.name.includes(searchField)
        })
    }
}

watch(products, newProducts => {
    visibleProductList.value = newProducts
})

</script>

<template>
    <div class="container-fluid main bg-dark text-light" data-bs-theme="dark">
        <h1 class="text-center mx-auto">
            <img src="/src/assets/images/shopping_cart.png" alt="Logo" style="width: 100px;height: 100px;filter: invert(100%);">
            Gestionnaire de produits</h1>
        <div class="row">
            <div class="col">
                <ProductSearch @search-products="searchProducts" />
                <ProductList :product-list="visibleProductList" @modifiy-product="modifyProductCall" 
                @delete-product="deleteProduct" @duplicate-product="duplicateProduct" @detail-product="detailProductCall"/>
            </div>
            <div class="col">
                <ProductForm :product="formProduct" @add-product="addProduct" @modify-product="modifyProduct" @cancel-modify="cancelModify"/>
                <ProductDetails :product="detailProduct" />
                <ProductExport :product-list="products"/>
            </div>
        </div>
    </div>
</template>

<style>
</style>