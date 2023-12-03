<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
const { updateCount, count } = useStore('home')
</script>

<template>
  <div>
    <div i-twemoji-alien inline-block text-4xl />
    <p>
      Hi, {{ props.name }}
    </p>
    <p>{{ count }}</p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>
    <div>
      <button m-3 mt-8 text-sm btn @click="updateCount">
        add
      </button>
      <button m-3 mt-8 text-sm btn @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
