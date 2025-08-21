<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { NButton, NDrawer, NDrawerContent, NIcon } from 'naive-ui'
import { MenuOutline } from '@vicons/ionicons5'
import { useWindowSize } from '@vueuse/core'
import { animate } from 'animejs'

defineOptions({ name: "HeaderPage" })

const { width } = useWindowSize()

const showMenu = ref(false)

const isMobileSize = computed(() => width.value < 768)

const links = [
  {
    name: "Главная",
    link: "#intro",
  },
  {
    name: "Обо мне",
    link: "#about",
  },
  {
    name: "Про консультации",
    link: "#consult",
  },
  {
    name: "Этапы работы",
    link: "#steps",
  },
  {
    name: "Формат работы",
    link: "#format",
  },
]

onMounted(() => {
  animate("#navigation", {
    x: ["-100vw", 0],
  })
})
</script>

<template>
  <header
    id="headerPage"
    class="fixed z-10 top-[27px] right-[16px]
    s:right-[24px]
    md:right-[initial] md:left-[2.5vw] md:top-[40px]
    lg:left-[3.6vw]
    "
  >
    <nav
      v-if="!isMobileSize"
      id="navigation"
      class="p-2 bg-white/50 rounded-full backdrop-blur-xs shadow-lg lg:px-4 lg:py-2 relative"
    >
      <ul class="navigation__list flex gap-[10px] lg:gap-4 xl:gap-[3.5vw]">
        <li
          v-for="link in links"
          :key="link.name"
          class="navigation__item"
        >
          <a class="navigation__link block px-3 text-base lg:text-lg xl:text-[1.39vw]" :href="link.link">{{ link.name }}</a>
        </li>
      </ul>
    </nav>

    <!-- Кнопка бургер -->
    <NButton
      v-if="isMobileSize"
      circle
      quaternary
      @click="showMenu = true"
    >
      <NIcon>
        <MenuOutline />
      </NIcon>
    </NButton>

    <!-- Меню сбоку -->
    <NDrawer
      v-if="isMobileSize"
      v-model:show="showMenu"
      placement="left"
      :width="240"
    >
      <NDrawerContent closable title="Меню">
        <ul class="space-y-2">
          <li v-for="link in links" :key="link.name">
            <a
              :href="link.link"
              @click="showMenu = false"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </NDrawerContent>
    </NDrawer>
  </header>
</template>

<style lang="scss">
.navigation {
  &__item {
    border: 1px solid transparent;
    border-radius: 30px;
    transition: .4s;

    &:hover {
      border-color: $black-color;
    }
  }
}
</style>
