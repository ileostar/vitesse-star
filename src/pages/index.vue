<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const router = useRouter()

const name = ref('')
const { msg } = useStore('home')

/**
 * 跳转链接
 * Navigates to the "hi" route with the value of the "name" input field
 *
 * @return {void}
 */
function go(): void {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <TheStudy />
  <h2 m-3>
    <o-text class="read-the-docs" font="bold" text-6 font-bold size="lg" gradient="linear-gradient(to right, #0c02ba, #00ff95)">
      {{ msg }}
    </o-text>
  </h2>
  <div class="card">
    <p color-gray>
      Click on the  logos to learn more
    </p>
    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />
    <div>
      <o-button
        type="info"
        mt-2
        :disabled="!name"
        @click="go"
      >
        Go
      </o-button>
    </div>
  </div>
</template>
