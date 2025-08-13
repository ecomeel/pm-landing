<script lang="ts" setup>
import UiArrowList from '@/ui/UiArrowList.vue';

defineOptions({ name: "AboutSection" });

const facts = [
  "<span>5 лет управляю проектами</span> в сфере онлайн-образования и инфобизнеса;",
  "Работала с медийными личностями, блогерами и экспертами: <span>Сати Казанова, Мари Коткова, Александра Македонская, Дамир Мухамадиев</span> — от первых запусков до сложных экосистем;",
  "<span>30+ реализованных</span> проектов;",
  "<span>50+ млн</span> на запусках;",
  "Управляла командой <span>40+ человек</span>;",
  "Повышаю квалификацию у <span>Анны Самокатовой</span>.",
]
</script>

<template>
  <section class="about">
    <div class="about__img-wrapper">
      <picture>
        <source media="(min-width: 768px)" srcset="@/assets/images/background/preview-2.webp" type="image/webp">
        <source srcset="@/assets/images/background/preview-2_mobile.webp" type="image/webp">
        <source media="(min-width: 768px)" srcset="@/assets/images/background/preview-2.png" type="image/png">
        <img class="about__img" src="@/assets/images/background/preview-2_mobile.png" alt="preview">
      </picture>

      <div class="about__img-border" />
    </div>

    <div class="about__text-content">
      <h2 class="about__title">Пару слов о <span>себе</span></h2>

      <UiArrowList :list="facts" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  padding-top: 120px !important;
  padding-bottom: 100px !important;
  display: flex;
  align-items: center;
  gap: 6.25vw;

  &__img {
    width: 34vw;
  }

  &__img-wrapper {
    position: relative;

    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 25px;
      top: -25px;
      border: 2px solid $beige-color;
    }
  }

  &__text-content {
    max-width: 40vw;
  }

  &__title {
    margin-bottom: 60px;
    @include h2;
  }

  @media (max-width: 1440px) {
    gap: 70px;

    &__img {
      width: 30vw;
    }

    &__text-content {
      max-width: 50vw;
    }

    &__title {
      margin-bottom: 35px;
    }
  }

  @media (max-width: 1279px) {
    padding: {
      top: 120px !important;
      bottom: 120px !important;
    };

    &__img {
      width: 300px;
    }

    &__text-content {
      max-width: 100%;
    }

    &__title {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 767px) {
    align-items: flex-start;

    &__img {
      width: 200px;
    }
  }

  @media (max-width: 550px) {
    gap: 30px;
    padding: {
      top: 50px !important;
      bottom: 50px !important;
    };

    &__img-wrapper {
      &::after {
        left: 10px;
        top: -15px;
      }
    }

    &__img {
      width: 120px;
    }
  }
}
</style>
