<script setup lang="ts">
import type { Product } from '../scripts/product';
import ProductItem from './ProductItem.vue';

function modifyProduct(id: number) {
    emit('modifiyProduct', id)
}
function deleteProduct(id: number) {
    emit('deleteProduct', id)
}
function duplcicateProduct(id: number) {
    emit('duplicateProduct', id)
}
function detailProduct(id: number) {
    emit('detailProduct', id)
}

defineProps<{
    productList: Product[]
}>()
const emit = defineEmits(['modifiyProduct', 'deleteProduct', 'duplicateProduct', 'detailProduct'])
</script>

<template>
    <div>
        <h3>Liste</h3>
        <ProductItem v-for="product of productList" :product="product" @modifiy-product="modifyProduct" 
            @delete-product="deleteProduct" @duplicate-product="duplcicateProduct" @detail-product="detailProduct"/>
        <p v-if="productList.length == 0">Il n'y a aucun produit dans cette liste.</p>
    </div>
</template>

<style>
</style>