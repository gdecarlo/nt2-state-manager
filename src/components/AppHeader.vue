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
import { useStockStore } from '@/stores/stockStore'

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
    background-color: var(--vue-green);
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid var(--vue-green-dark);
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
    color: white;
}

.stats {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.stats-label {
    color: rgba(255, 255, 255, 0.9);
}

.article-count {
    font-weight: bold;
    color: var(--vue-green);
    background-color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    min-width: 2rem;
    text-align: center;
}
</style>