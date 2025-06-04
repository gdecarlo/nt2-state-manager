<template>
    <input type="text" v-model="newItemName">
    <button @click="add">Add</button>
</template>

<script setup>
import {ref} from 'vue'
import {useStockStore} from '@/stores/stockStore'

const stockStore = useStockStore()
const newItemName = ref('')

function add(){
    const newItem = {id:999,name:newItemName.value,activo:true}
    stockStore.addItem(newItem)
    newItemName.value = ''
}
</script>

<style scoped>
input[type="text"] {
    padding: 0.8em;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: calc(100% - 2em);
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    transition: border-color 0.3s ease;
}

input[type="text"]:focus {
    border-color: var(--vue-green);
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
}

button {
    padding: 0.8em 1.2em;
    border: none;
    border-radius: 4px;
    background-color: var(--vue-green);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: var(--vue-green-dark);
}
</style>