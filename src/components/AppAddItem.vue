<template>
    <input type="text" v-model="newItemName">
    <button @click="add">Add</button>
</template>

<script setup>
import {ref} from 'vue'
import {useStockStore} from '../stores/stockStore'

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
}

button {
    padding: 0.8em 1.2em;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}
</style>