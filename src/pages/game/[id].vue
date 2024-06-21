<script setup lang="ts">
import { getGameById } from '~/data/few-iframe-game'

const route = useRoute('/game/[id]')

const game = computed(() => getGameById(route.params.id))
</script>

<template>
  <div>
    <iframe
      v-if="game?.iframeSrc" :src="game.iframeSrc" frameborder="0" :style="{
        width: `${game.width}px`,
        height: `${game.height}px`,
      }"
    />
  </div>
</template>
