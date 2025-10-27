<script lang="ts" setup>
import { useProject } from '@/composables'
import UiCircleText from '@/ui/UiCircleText.vue'
import UiNumberedList from '@/ui/UiNumberedList.vue'

defineOptions({ name: "StepsSection" })

const { isMobileView } = useProject()

const stepsList = [
  {
    title: "Подтверждение времени и оплата",
    description: "Мы согласовываем дату и время консультации. После оплаты встреча фиксируется в календаре",
  },
  {
    title: "Заполнение брифа",
    description: "Заполняете анкету, где рассказываете про свою ситуацию, задачи, опыт и контекст. Это помогает сэкономить время на созвоне и сосредоточиться на сути",
  },
  {
    title: "Консультация (1-2 часа)",
    description: "Встреча проходит в Zoom. Разбираю вашу ситуацию, находим узкие места, разрабатываем план действий",
  },
  {
    title: "Резюме встречи",
    description: "В течение 2 дней после консультации я отправляю Road Map с ключевыми выводами, рекомендациями и направлением для развития. Поддержка от меня — 2 недели",
  },
]
</script>

<template>
  <section id="steps" class="steps">
    <h2 class="steps__title">
      Этапы <span>нашей</span> работы
    </h2>
    <div class="steps__subtitle-wrapper">
      <p class="steps__subtitle">
        Чтобы консультация была максимально полезной, мы работаем по структуре
        <img
          alt="arrow"
          class="steps__subtitle-arrow"
          src="@/assets/images/icons/arrow-right-bottom.svg"
        >
      </p>
    </div>

    <UiNumberedList :list="stepsList" />

    <div class="steps__invite invite">
      <p class="invite__price">
        Стоимость консультации — 5000₽
      </p>
      <UiCircleText class="invite__circle" :show-arrow="!isMobileView" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.steps {
  padding-top: 100px;
  padding-bottom: 130px;

  &__title {
    @include h2;
  }

  &__subtitle {
    margin: 36px 0 70px;
    @include subtitle;

    &-arrow {
      display: inline-block;
      width: 18px;
      margin-left: 5px;
    }
  }

  .invite {
    margin-top: 50px;
    display: flex;
    align-items: center;
    gap: 20px;

    &__price {
      padding: 12px 16px;
      border: 1px solid $black-color;
      @include body-2-bold;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      margin-top: 30px;
    }

    @media (max-width: 549px) {
      &__price {
        padding: 10px 12px 9px;
        font-size: 12px !important;
      }
    }
  }

  @media (max-width: 1279px) {
    padding-top: 90px;

    &__subtitle {
      margin: 28px 0 40px;
    }
  }

  @media (max-width: 1023px) {
    padding-bottom: 90px;

    &__subtitle {
      margin: 20px 0 50px;

      &-arrow {
        width: 14px;
      }
    }

    .invite__price {
      font-size: 14px;
    }
  }

  @media (max-width: 767px) {
    padding: {
      top: 40px;
      bottom: 40px;
    };

    &__subtitle {
      margin: 8px 0 40px;

      &-arrow {
        width: 12px;
      }
    }
  }

  @media (max-width: 549px) {
    &__subtitle {
      margin-bottom: calc(22px + 1.5vw);

      &-arrow {
        width: 3vw;
      }
    }
  }
}
</style>
