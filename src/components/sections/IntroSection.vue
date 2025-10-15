<script lang="ts" setup>
import UiCircleText from '@/ui/UiCircleText.vue'
import UiDarkSocial from '@/ui/UiDarkSocial.vue'
import { SOCIALS } from '@/constants'

import { animate } from 'animejs'
import { onMounted } from 'vue'
import { useProject } from '@/composables'

defineOptions({ name: "IntroSection" })

const { isMobileView } = useProject()

onMounted(() => {
  animate(".intro__header", {
    x: ["-100vw", 0 ],
    opacity: [0, 1],
  })

  animate(".intro__subtitle", {
    delay: 100,
    x: ["-100vw", 0 ],
    opacity: [0, 1],
  })

  animate(".intro__description", {
    delay: 200,
    x: ["-100vw", 0 ],
    opacity: [0, 1],
  })

  animate(".intro__consult", {
    delay: 300,
    x: ["-100vw", 0 ],
    opacity: [0, 1],
  })
})
</script>

<template>
  <section id="intro" class="intro">
    <header class="intro__header header overflow-clip inline-block">
      <h1 class="header__title main-medium inline-block">
        Гущина Анастасия
      </h1>
      <img
        alt="arrow icon"
        class="header__arrow"
        src="@/assets/images/icons/arrow-right-bottom.svg"
      >
    </header>

    <h2 class="intro__subtitle">
      Проджект-менеджер
      <span>крупных онлайн-проектов</span>
    </h2>

    <p class="intro__description">
      Провожу <b>консультации</b> для&nbsp;тех, кто&nbsp;начинает свой путь в&nbsp;онлайне и&nbsp;для&nbsp;опытных проджект-менеджеров, которые хотят уверенно расти в&nbsp;онлайн-среде: <b>системно, спокойно и&nbsp;без&nbsp;выгорания</b>
    </p>

    <div class="intro__consult">
      <UiCircleText :show-arrow="!isMobileView" />

      <div class="intro__socials">
        <UiDarkSocial
          v-for="(social, index) in SOCIALS"
          :key="index"
          :icon="social.icon"
          :link="social.link"
          :name="social.id"
        />
      </div>
    </div>

    <picture>
      <!--
        <source
        media="(min-width: 768px)"
        srcset="@/assets/images/background/preview-1.webp"
        type="image/webp"
        >
      -->
      <!-- <source srcset="@/assets/images/background/preview-1_mobile.webp" type="image/webp"> -->
      <source
        media="(min-width: 768px)"
        srcset="@/assets/images/background/preview-1.jpg"
        type="image/jpg"
      >
      <img
        alt="preview"
        class="intro__bg"
        src="@/assets/images/background/preview-1_mobile.jpg"
      >
    </picture>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  height: 100vh;
  width: 100%;
  position: relative;

  > *:not(:last-child) {
    position: relative;
    z-index: 1;
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 56% top;
    pointer-events: none;
  }

  .header {
    padding-top: 17vh;
    display: flex;
    align-items: center;
    gap: 12px;

    &__title {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;

      @include main-medium;
    }
  }

  &__subtitle {
    margin-top: 2.6vh;
    font-family: "Cormorant";
    font-weight: 400;
    font-size: 6.4vw;

    span {
      margin-top: 0.1vh;
      display: block;
      font-weight: 500;
      font-size: 3.75vw;
    }
  }

  &__description {
    margin-top: 2.3vw;
    max-width: 38vw;
    font-family: "Stetica";
    font-weight: 400;
    line-height: 1.4em;
    font-size: 1.45vw;

    b {
      font-weight: 500;
      font-style: italic;
    }
  }

  &__consult {
    margin-top: 8vh;
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  &__socials {
    display: none;
  }

  @media (max-width: 767px) {
    height: auto;
    padding-bottom: 26vw;

    .header {
      gap: 8px;
      padding-top: 50px;
      margin-left: 0;

      &__title {
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
      }
    }

    &__subtitle {
      width: max-content;
      font-size: 10.48vw;
      margin-top: 2.7vh;
      margin-left: -1px;

      span {
        margin-top: 2px;
        margin-left: 1px;
        font-size: 7.08vw;
      }
    }

    &__description {
      margin-top: 28px;
      font-size: 3.68vw;
      line-height: 1.25em;
      max-width: 80vw;
    }

    &__long-arrow {
      display: none;
    }

    &__consult {
      margin-top: 6vh;
      flex-direction: column;
      width: max-content;
    }

    &__socials {
      margin-top: 7vh;
      display: flex;
      flex-direction: column;
      gap: 16px
    }
  }

  @media (max-width: 549px) {
    &__description {
      margin-top: 16px;
      font-size: 4.375vw;

      b:last-child {
        display: block;
      }
    }

    &__socials {
      margin-top: 5vh;
      gap: 8px
    }
  }
}
</style>
