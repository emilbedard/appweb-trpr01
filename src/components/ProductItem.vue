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
            <span v-if="product.stock == 0" class="text-white bg-danger rounded"><b>{{ "<!>" }}</b></span>
            <button type="button" class="btn btn-body border border-secondary" @click="detailProduct">{{ product.name }}</button>
            <button type="button" class="btn btn-warning" @click="modifyProduct">Modifier</button>
            <button type="button" class="btn btn-danger" @click="deleteProduct">Supprimer</button>
            <button type="button" class="btn btn-primary" @click="duplicateProduct">Dupliquer</button>
        </p>
    </div>
</template>

<style>
</style>