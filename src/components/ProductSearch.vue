<script setup lang="ts">
import { ref } from 'vue';

function searchProducts() {
    emit('searchProducts', searchField.value)
}

const searchField = ref("")

const emit = defineEmits(['searchProducts'])
</script>

<template>
    <div>
        <h3>Recherche</h3>
        <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="searchField" @input="searchProducts">
        </div>
    </div>
</template>

<style>
</style>