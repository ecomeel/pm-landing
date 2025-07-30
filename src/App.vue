<script setup lang="ts">
import IntroSection from './components/sections/IntroSection.vue';
import HeaderPage from './components/HeaderPage.vue';
</script>

<template>
  <div class="page">
    <HeaderPage />
    <main class="page__content">
      <IntroSection />
      <IntroSection />
    </main>
  </div>
</template>

<style scoped lang="scss">
.page {
  position: relative;
  overflow: auto;
  scroll-behavior: smooth;
  height: 100%;
  width: 100%;

  &__content {
    overflow: hidden;
    > * {
      padding: 0 5.59vw;
    }
  }

  @media (max-width: 549px) {
    &__content > * {
      padding: 0 16px;
    }
  }
}
</style>
