<script setup lang="ts">
defineProps<{
  list: GameList[]
}>()

const router = useRouter()
function go(id: string) {
  router.push(`/game/${id}`)
}
</script>

<template>
  <div class="game-list">
    <div v-for="game in list" :key="game.id" class="game" @click="go(game.id)">
      <div class="game__avatar">
        <img :src="game.avatar" alt="">
      </div>
      <div class="game__title">
        {{ game.title }}
      </div>
      <div class="game__description">
        {{ game.description }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-list {
  padding: 0 10px;
}
.game {
  display: inline-block;
  vertical-align: top;
  width: 172px;
  margin-bottom: 10px;
  &:nth-child(even) {
    margin-left: 11px;
  }
}
.game__avatar {
  position: relative;
  width: 100%;
  padding-top: calc((250 / 315) * 100%);
  background-color: #ccc;

  > img {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
}
.game__title {
  margin-top: 4px;
  font-weight: bold;
  font-size: 14px;
}
.game__description {
  font-size: 12px;

  // 截断2行
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
