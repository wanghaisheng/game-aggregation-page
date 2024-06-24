<script setup lang="ts">
import { UseDraggable } from '@vueuse/components'
import { getGameById, getRandomGameList } from '~/data/few-iframe-game'

const route = useRoute('/game/[id]')

const randomGameList = computed(() => getRandomGameList(route.params.id))

const game = computed(() => getGameById(route.params.id))

const { isFullscreen, enter } = useFullscreen()
</script>

<template>
  <template v-if="game">
    <div class="game-start" @click="enter">
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
    <div v-if="isFullscreen" class="game-window">
      <UseDraggable :initial-value="{ x: 0, y: 40 }" storage-key="float-widgets-draggable" storage-type="session" style="position: absolute">
        <div class="float-widgets">
          Back
        </div>
      </UseDraggable>
      <iframe v-if="game?.iframeSrc" :src="game.iframeSrc" frameborder="0" />
    </div>
  </template>
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

.game-window {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  z-index: 1;
  > iframe {
    width: 100%;
    height: 100%;
  }
}

.float-widgets {
  width: 40px;
  background-color: #fff;
  line-height: 40px;
  border-radius: 20px;
  text-align: center;

  opacity: 0.3;
}
</style>
