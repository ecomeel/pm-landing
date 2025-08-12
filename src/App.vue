<script setup lang="ts">
import IntroSection from './components/sections/IntroSection.vue';
import HeaderPage from './components/HeaderPage.vue';
import AboutSection from './components/sections/AboutSection.vue';
import ConsultReasonsSection from './components/sections/ConsultReasonsSection.vue';
import AdditionalAdvantagesSection from './components/sections/AdditionalAdvantagesSection.vue';
import StepsSection from './components/sections/StepsSection.vue';
import ConsultFormatSection from './components/sections/ConsultFormatSection.vue';
</script>

<template>
  <div class="page">
    <HeaderPage />
    <main class="page__content">
      <IntroSection />
      <AboutSection />
      <ConsultReasonsSection />
      <StepsSection />
      <AdditionalAdvantagesSection />
      <ConsultFormatSection />
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
