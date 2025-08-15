<script lang="ts" setup>
import { ref, computed } from 'vue';
import { NDrawer, NDrawerContent, NButton, NIcon } from 'naive-ui'
import { MenuOutline } from '@vicons/ionicons5'
import { useWindowSize } from '@vueuse/core';

defineOptions({ name: "HeaderPage" });

const { width } = useWindowSize();

const showMenu = ref(false);

const isMobileSize = computed(() => width.value < 768);

const links = [
  {
    name: "Главная",
    link: "#",
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
  // {
  //   name: "Кто приходит",
  //   link: "",
  // },
]
</script>

<template>
  <header class="header">
    <nav v-if="!isMobileSize" class="header__navigation navigation">
      <ul class="navigation__list">
        <li class="navigation__item" v-for="link in links" :key="link.name">
          <a class="navigation__link" :href="link.link">{{ link.name }}</a>
        </li>
      </ul>
    </nav>

    <!-- Кнопка бургер -->
    <NButton v-if="isMobileSize" quaternary circle @click="showMenu = true">
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
              @click="showMenu = false" 
              :href="link.link" 
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </NDrawerContent>
    </NDrawer>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 4.5vh 4.5vw 0;

  @media (max-width: 1280px) {
    padding: 30px 3.6vw 0;
  }

  @media (max-width: 767px) {
    padding-top: 30px;
    padding-right: 40px;
    left: initial;
    right: 0;
  }

  @media (max-width: 549px) {
    padding: {
      top: 25px;
      right: 25px;
    };
  }
}

.navigation {
  @include text-mobile-background(50px, 0.35);
  padding: 8px 12px;
  box-shadow: 5px 5px 20px rgba(grey, $alpha: 0.5);

  &__list {
    display: flex;
    gap: 3.5vw
  }

  &__item {
    border: 1px solid transparent;
    border-radius: 30px;
    transition: .4s;

    &:hover {
      border-color: $black-color;
    }
  }

  &__link {
    display: block;
    padding: 4px 12px;
    font-size: 20px;
  }

  @media (max-width: 1439px) {
    &__link {
      font-size: 18px;
    }
  }

  @media (max-width: 1280px) {
    &__list {
      gap: 16px;
    }
  }

  @media (max-width: 900px) {
    padding: 8px 8px;

    &__list {
      gap: 10px
    }

    &__link {
      padding: 6px 12px;
      font-size: 16px;
    }
  }
}
</style>
