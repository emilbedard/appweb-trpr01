<script setup lang="ts">
import type { Product } from '../scripts/product';

function exportToCSV() {
    const productKeys = Object.keys(props.productList[0])

    const preparedData = []
    preparedData.push(productKeys)

    props.productList.forEach(product => {
        preparedData.push(Object.values(product))
    })

    let csvData = ''

    preparedData.forEach(line => {
        csvData += line.join(',') + '\n'
    })

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8,'})
    const csvUrl = URL.createObjectURL(blob)
    
    let link = document.createElement('a')
    link.href = csvUrl
    link.download = 'fichier_produits.csv'
    link.click()
}

const props = defineProps<{
    productList: Product[]
}>()
</script>

<template>
    <div>
        <button type="button" class="btn btn-primary" @click="exportToCSV">Exporter</button>
    </div>
</template>

<style>
</style>