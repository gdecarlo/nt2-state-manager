<template>
    <ul>
        <li v-for="item in stockStore.getItems">{{ item.name }}</li>
    </ul>
    <p>Usamos otra vez el total: {{ stockStore.itemsCount }}</p>
</template>

<script setup>
import { useStockStore } from '@/stores/stockStore'
// Importamos el store de stock

const stockStore = useStockStore()
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    max-width: 600px;
    margin: 0 auto;
}

li {
    padding: 1em 1.2em;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 0.7em;
    border-radius: 8px;
    transition: all 0.3s ease;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
}

li:hover {
    background-color: #f0f0f0;
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

p {
    font-weight: bold;
    color: #555;
    margin-top: 1.5em;
    font-size: 1.1em;
    text-align: center;
}
</style>
