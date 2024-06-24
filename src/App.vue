<script lang="ts">
import { throttle } from 'lodash-es'

const htmlEl = window.document.querySelector('html') as HTMLHtmlElement
const FONT_SIZE_TO_WIDTH = 16 / 375

const updateRootFontSize = throttle(() => {
  const width = window.innerWidth
  const fontSize = width * FONT_SIZE_TO_WIDTH
  htmlEl.style.fontSize = `${fontSize}px`
}, 100)

window.addEventListener('resize', updateRootFontSize)

updateRootFontSize()
</script>

<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    {
      name: 'description',
      content: 'Opinionated Vite Starter Template',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
