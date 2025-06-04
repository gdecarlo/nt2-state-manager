# Aplicación de Inventario con Vue 3 y Pinia

Este proyecto didáctico está diseñado para que los estudiantes aprendan a implementar y gestionar el estado centralizado en aplicaciones Vue 3 utilizando Pinia, el gestor de estado oficial recomendado para Vue.

![Vue.js](https://img.shields.io/badge/Vue.js-v3.4-42b883)
![Pinia](https://img.shields.io/badge/Pinia-v3.0-ffd859)
![Vite](https://img.shields.io/badge/Vite-v5.2-646cff)

## 🍍 Objetivo Pedagógico

Esta aplicación de inventario simplificada permite a los estudiantes comprender:

- Cómo implementar un store centralizado con Pinia
- Cómo definir y utilizar state, getters y actions
- Cómo comunicar componentes a través de un estado compartido
- Las ventajas del estado centralizado frente a prop-drilling o eventos
- La composition API de Vue 3 con `<script setup>`

## 📚 Estructura del Proyecto

```
src/
├── App.vue                # Componente principal que organiza la estructura
├── main.js               # Punto de entrada donde se inicializa Vue y Pinia
├── style.css             # Estilos globales con la paleta de colores de Vue.js
├── assets/               # Recursos estáticos
├── components/           # Componentes de la aplicación
│   ├── AppHeader.vue     # Encabezado con contador de artículos
│   ├── AppAddItem.vue    # Formulario para agregar nuevos artículos
│   └── AppItemList.vue   # Lista de artículos que consume el estado
└── stores/               # Definición de los stores de Pinia
    └── stockStore.js     # Store centralizado para gestionar el inventario
```

## 🧩 Componentes Principales

### AppHeader
Muestra el título de la aplicación y el contador total de artículos activos, consumiendo datos del store centralizado.

### AppAddItem
Permite al usuario agregar nuevos artículos al inventario mediante un formulario simple que interactúa con las acciones del store.

### AppItemList
Muestra la lista de artículos activos, obteniendo los datos directamente del store mediante getters.

## 🏪 Store Centralizado

El proyecto utiliza un store de Pinia (`stockStore.js`) que implementa:

- **Estado reactivo**: Colección de artículos (_items)
- **Getters**: Cálculo de artículos filtrados y conteo total
- **Acciones**: Método para agregar nuevos artículos

```js
// Estructura básica del store
export const useStockStore = defineStore('stockStore', () => {
    // Estado
    const _items = ref([...])
    
    // Acciones
    function addItem(item) {
        _items.value.push(item)
    }
    
    // Getters
    const getItems = computed(() => _items.value.filter(item => item.activo))
    const itemsCount = computed(() => getItems.value.length)
    
    return { addItem, itemsCount, getItems }
})
```

## 🚀 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar la build
npm run preview
```

## 📝 Ejercicios Sugeridos

1. Implementar la eliminación de artículos (deleteItem)
2. Agregar un toggle para cambiar el estado activo/inactivo
3. Implementar filtrado por nombre de artículo
4. Agregar persistencia con localStorage
5. Crear un segundo store para gestionar preferencias de usuario

## 💡 Conceptos Clave

- **Composition API**: Uso de `<script setup>` y funciones composables
- **Reactividad**: Uso de `ref()`, `computed()` y actualizaciones automáticas
- **Estado Centralizado**: Acceso al mismo estado desde múltiples componentes
- **Inmutabilidad**: Prácticas recomendadas para modificar el estado

## 📚 Recursos Adicionales

- [Documentación de Vue 3](https://v3.vuejs.org/)
- [Documentación de Pinia](https://pinia.vuejs.org/)
- [Composition API RFC](https://v3.vuejs.org/guide/composition-api-introduction.html)
- [Vite - Herramienta de construcción](https://vitejs.dev/)

## 🛠️ Configuración de IDE Recomendada

- [VS Code](https://code.visualstudio.com/) + [Extensión Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
