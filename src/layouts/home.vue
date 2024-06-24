<script setup lang="ts">
const router = useRouter()
function goHome() {
  router.push(`/`)
}
</script>

<template>
  <nav class="nav">
    <div class="logo" @click="goHome">
      logo
    </div>
  </nav>
  <RouterView />
</template>

<style lang="scss">
.nav {
  position: sticky;
  top: 0;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  z-index: 1;
}
</style>
