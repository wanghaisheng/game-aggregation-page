<script setup lang="ts">
import { list } from '~/data/few-iframe-game'

defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <main>
    <GameList :list="list" />
  </main>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style scoped>
main {
  padding: 10px 0;
}
</style>
