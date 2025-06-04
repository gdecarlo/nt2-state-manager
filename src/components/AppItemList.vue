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
    border-bottom: 1px solid rgba(66, 184, 131, 0.2);
    margin-bottom: 0.7em;
    border-radius: 8px;
    transition: all 0.3s ease;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    border-left: 3px solid var(--vue-green);
}

li:hover {
    background-color: var(--vue-gray-lighter);
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    border-left-color: var(--vue-green-dark);
}

p {
    font-weight: bold;
    color: var(--vue-gray);
    margin-top: 1.5em;
    font-size: 1.1em;
    text-align: center;
}
</style>
