<script setup lang="ts">
import { list } from '~/data/few-iframe-game'

defineOptions({
  name: 'IndexPage',
})

const router = useRouter()
function go(id: string) {
  router.push(`/game/${id}`)
}
</script>

<template>
  <div v-for="game in list" :key="game.id" class="game" @click="go(game.id)">
    <img :src="game.avatar" alt="">
    <div class="game__title">
      {{ game.title }}
    </div>
    <div class="game__description">
      {{ game.description }}
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
