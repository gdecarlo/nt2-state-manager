import { defineStore } from "pinia";
import { ref,computed } from "vue";

export const useStockStore = defineStore('stockStore',()=>{
    const _items = ref([
        {id:1,name:'item 1',activo:false}
    ])

    function addItem(item){
        _items.value.push(item)
    }

    const getItems = computed(()=> _items.value.filter(item=>item.activo))
    const itemsCount = computed(()=> getItems.value.length)

    return{
        addItem,
        itemsCount,
        getItems
    }
})