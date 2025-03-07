<script setup lang="ts">
import type { Product } from '../scripts/product';

const props = defineProps<{
    product: Product | null
}>()
</script>

<template>
    <div class="my-3">
        <h3>Details</h3>
        <p v-if="product">Nom : {{ props.product?.name }}</p>
        <p v-if="product">Description : {{ props.product?.description }}</p>
        <p v-if="product">Prix : {{ props.product?.price }} $</p>
        <span v-if="product" :class="{
            'bg-warning text-dark': product.stock <= 10 && product.stock > 0,
            'bg-danger': product.stock == 0}" class="rounded p-1 mb-5">
            Stock : {{ props.product?.stock }}</span>
    </div>
</template>

<style>
</style>