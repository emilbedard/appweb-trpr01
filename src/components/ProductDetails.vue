<script setup lang="ts">
import type { Product } from '../scripts/product';

const props = defineProps<{
    product: Product | null
}>()
</script>

<template>
    <div>
        <h3>Details</h3>
        <p v-if="product">Nom : {{ props.product?.name }}</p>
        <p v-if="product">Description : {{ props.product?.description }}</p>
        <p v-if="product">Prix : {{ props.product?.price }} $</p>
        <span v-if="product" :class="{
            'bg-warning': product.stock <= 10,
            'bg-danger': product.stock == 0}" class="rounded p-2 m-2">
            Stock : {{ props.product?.stock }}</span>
    </div>
</template>

<style>
</style>