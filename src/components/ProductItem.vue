<script setup lang="ts">
import type { Product } from '../scripts/product';

function modifyProduct() {
    emit('modifiyProduct', props.product.id)
}
function deleteProduct() {
    emit('deleteProduct', props.product.id)
}
function duplicateProduct() {
    emit('duplicateProduct', props.product.id)
}
function detailProduct() {
    emit('detailProduct', props.product.id)
}

const props = defineProps<{
    product: Product
}>()
const emit = defineEmits(['modifiyProduct', 'deleteProduct', 'duplicateProduct', 'detailProduct'])
</script>

<template>
    <div class="col">
        <p>
            <button v-if="product.stock == 0" class="text-white bg-danger border-0 rounded py-1 px-3 mx-1"><b>!</b></button>
            <button type="button" class="btn btn-body border border-secondary mx-1" @click="detailProduct">{{ product.name }}</button>
            <button type="button" class="btn btn-warning mx-1" @click="modifyProduct">Modifier</button>
            <button type="button" class="btn btn-danger mx-1" @click="deleteProduct">Supprimer</button>
            <button type="button" class="btn btn-primary mx-1" @click="duplicateProduct">Dupliquer</button>
        </p>
    </div>
</template>

<style>
</style>