<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppAddItem from '@/components/AppAddItem.vue'
import AppItemList from '@/components/AppItemList.vue'
</script>

<template>
  <div class="container">
    <AppHeader appName="Ejemplo de uso de Pinia 🍍"></AppHeader>
    <div id="main">
      <article>
        <AppAddItem></AppAddItem>
      </article>
      <nav>
        <AppItemList></AppItemList>
      </nav>

    </div>

  </div>


</template>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
}

#main {
  display: flex;
  flex: 1;
}

#main>article {
  flex: 1;
}

#main>nav,
#main>aside {
  flex: 0 0 20vw;
  background: var(--vue-gray-lighter);
  border-right: 1px solid rgba(66, 184, 131, 0.2);
  /* Vue green with opacity */
}

#main>nav {
  order: -1;
}

header {
  background: var(--vue-green);
  color: white;
  height: 20vh;
}

header,
article,
nav,
aside {
  padding: 1em;
}
</style>
