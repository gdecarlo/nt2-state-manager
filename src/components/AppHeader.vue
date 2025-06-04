<template>
    <header class="app-header">
        <nav>
            <div class="logo">{{ appName }}</div>
            <div class="stats">
                <span class="stats-label">Total de artículos:</span>
                <span class="article-count">{{ stockStore.itemsCount }}</span>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { useStockStore } from '../stores/stockStore'

const stockStore = useStockStore()
defineProps({
    appName: {
        type: String,
        default: 'Mi Aplicación de Inventario'
    }
})
</script>

<style scoped>
.app-header {
    background-color: #f8f9fa;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #e0e0e0;
}

nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

.stats {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.stats-label {
    color: #555;
}

.article-count {
    font-weight: bold;
    color: #007bff;
    background-color: #e7f1ff;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    min-width: 2rem;
    text-align: center;
}
</style>