<script setup lang="ts">
const indexStore = useIndexStore()
const { count, msg } = storeToRefs(indexStore)
</script>

<template>
  <div flex="~ items-center" m-t-20 justify-center class="logo-link">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
    <a href="https://pinia.vuejs.org/zh/" target="_blank">
      <img src="@/assets/pinia.svg" class="logo pinia" alt="Pinia logo">
    </a>
    <a href="https://alfred-skyblue.github.io/" target="_blank">
      <img src="@/assets/unocss.svg" class="logo unocss" alt="UnoCss logo">
    </a>
    <a href="https://alova.js.org/zh-CN/" target="_blank">
      <img src="@/assets/alova.svg" class="logo alova" alt="Alova logo">
    </a>
    <a href="https://cn.vitest.dev/" target="_blank">
      <img src="@/assets/vitest.png" class="logo pinia" alt="Vitest logo">
    </a>
  </div>
  <h2 text-7 m-3 font-bold>{{ msg }}</h2>
  <div class="card">
    <button type="button" @click="indexStore.updateCount"  cursor-pointer font-100 border-rd-3 border p="t-2 b-2 l-3 r-3" m-2>
      count is {{ count }}
    </button>
    <p class="read-the-docs">
      Click on the  logos to learn more
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.logo {
  height: 8em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #ffd552);
}
.logo.alova:hover {
  filter: drop-shadow(0 0 2em #00b0ed);
}
.logo.unocss:hover {
  filter: drop-shadow(0 0 2em #586c43);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
