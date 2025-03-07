<script setup lang="ts">
import { type Product } from '../scripts/product';
import { computed, ref, watch} from 'vue';

const productName = ref("")
const productDescription = ref("")
const productPrice = ref(0.00)
const productStock = ref(0)

const isSubmitDisabled = ref(true)

function validateInputs() {
    productPrice.value = Math.round(productPrice.value * 100) / 100
    productStock.value = Math.round(productStock.value)
    if (
        productName.value.trim() != ""
        && productDescription.value.trim() != ""
        && productPrice.value >= 0
        && productPrice.value < 1_000_000_000
        && productStock.value >= 0
        && productStock.value < 1_000_000_000) {
            isSubmitDisabled.value = false
    }
    else { isSubmitDisabled.value = true }
}

function addProduct() {
    let newProduct: Product = {
        id: 0,
        name: productName.value,
        description: productDescription.value,
        price: productPrice.value,
        stock: productStock.value
    }
    emit('addProduct', newProduct)

    productName.value = ""
    productDescription.value = ""
    productPrice.value = 0
    productStock.value = 0
}

const props = defineProps<{
    product: Product | null
}>()

const isModifying = computed(() => props.product)
watch(isModifying, value => {
    if (props.product && value) {
        productName.value = props.product.name
        productDescription.value = props.product.description
        productPrice.value = props.product.price
        productStock.value = props.product.stock
    }
    else {
        productName.value = ""
        productDescription.value = ""
        productPrice.value = 0
        productStock.value = 0        
    }
})

function modifiyProduct() {
    if (props.product) {
        let modifiedProduct: Product = {
            id: props.product.id,
            name: productName.value,
            description: productDescription.value,
            price: productPrice.value,
            stock: productStock.value
        }
        emit('modifyProduct', modifiedProduct)
    }
}
function cancelModify() {
    emit('cancelModify')
}

const emit = defineEmits(['addProduct', 'modifyProduct', 'cancelModify'])
</script>

<template>
    <div>
        <h3>Formulaire</h3>
        <form action="" method="post" class="w-75" @input="validateInputs">
            <div class="input-group mb-3">
                <span class="input-group-text">Nom</span>
                <input type="text" class="form-control" v-model="productName">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Description</span>
                <input type="text" class="form-control" v-model="productDescription">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Prix</span>
                <input type="number" class="form-control" v-model="productPrice">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Stock</span>
                <input type="number" class="form-control" v-model="productStock">
            </div>
            <button v-if="!isModifying" type="button" class="btn btn-success" :disabled="isSubmitDisabled" @click="addProduct">Ajouter</button>
            <button v-if="isModifying" type="button" class="btn btn-warning" :disabled="isSubmitDisabled" @click="modifiyProduct">Modifier</button>
            <button v-if="isModifying" type="button" class="btn btn-danger" @click="cancelModify">Annuler</button>
        </form>
    </div>
</template>

<style>
</style>