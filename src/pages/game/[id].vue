<script setup lang="ts">
import { getGameById, getRandomGameList } from '~/data/few-iframe-game'

const route = useRoute('/game/[id]')

const randomGameList = computed(() => getRandomGameList(route.params.id))

const game = computed(() => getGameById(route.params.id))

const fullscreen = ref(false)

function start() {
  fullscreen.value = true
}
</script>

<template>
  <div class="game-start" @click="start">
    <div class="game-start__bg" :style="{ backgroundImage: `url(${game.avatar})` }" />
    <button class="game-start__btn">
      Run game
    </button>
  </div>
  <div class="game-info">
    <div class="game-info__title">
      {{ game.title }}
    </div>
    <div class="game-info__desc">
      {{ game.description }}
    </div>
  </div>
  <div class="list-title">
    More
  </div>
  <GameList class="game-list" :list="randomGameList" />
  <div v-if="fullscreen" class="game-window">
    <div class="float-widgets" />
    <iframe
      v-if="game?.iframeSrc" :src="game.iframeSrc" frameborder="0" :style="{
        width: `${game.width}px`,
        height: `${game.height}px`,
      }"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style lang="scss">
.game-start {
  overflow: hidden;
  position: relative;
  padding-top: calc(9 / 16 * 100%);
}

.game-start__bg {
  position: absolute;
  left: -10px;
  right: -10px;
  top: -10px;
  bottom: -10px;

  background-size: cover;
  background-position: center;
  filter: blur(10px);
}

.game-start__btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: block;
  width: 120px;
  border-radius: 10px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  background-color: #fff;

  font-size: 20px;
  font-weight: bold;
  line-height: 46px;
}

.game-info {
  padding: 0 10px;
  margin-top: 10px;
  text-align: center;
}

.game-info__title {
  font-size: 16px;
}

.game-info__desc {
  font-size: 14px;
}

.list-title {
  padding: 0 10px;
  margin-top: 14px;
  font-size: 18px;
  font-weight: bold;
}

.game-list {
  margin-top: 10px;
}
</style>
