<script lang="ts" setup>
import UiCircleText from '@/ui/UiCircleText.vue';
import UiNumberedList from '@/ui/UiNumberedList.vue';

defineOptions({ name: "StepsSection" });

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
  <section class="steps">
    <h2 class="steps__title">Этапы <span>нашей</span> работы</h2>
    <p class="steps__subtitle">Чтобы консультация была максимально полезной, мы работаем по структуре</p>

    <UiNumberedList :list="stepsList" />

    <div class="steps__invite invite">
      <p class="invite__price">Стоимость консультации - 5000₽</p>
      <div class="invite__arrow">
        <img src="@/assets/images/icons/long-arrow.svg" alt="arrow icon">
      </div>
      <UiCircleText class="invite__circle" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.steps {
  padding-bottom: 130px !important;

  &__title {
    @include h2;
  }

  &__subtitle {
    margin: 36px 0 70px;
    @include subtitle;
  }

  .invite {
    margin-top: 50px;
    display: flex;
    align-items: center;
    gap: 20px;

    &__arrow {
      width: 10vw;

      img {
        width: 100%;
      }
    }

    &__price {
      padding: 12px 16px;
      border: 1px solid $black-color;
      @include body-2-bold;
    }
  }

  @media (max-width: 1023px) {
    &__subtitle {
      margin: 20px 0 50px;
    }
    
    .invite__circle {
      width: 150px;

      :deep(p) {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 70px !important;

    &__subtitle {
      margin: 12px 0 40px;
    }

    .invite {
      margin-top: 25px;
      gap: 8px;

      &__price {
        padding: 8px 12px;
      }

      &__circle {
        width: 130px;

        :deep(p) {
          font-size: 12px;
        }
      }
    }
  }

  @media (max-width: 549px) {
    &__subtitle {
      margin-bottom: 26px;
    }

    .invite {
      gap: 40px;

      &__arrow {
        display: none;
      }

      &__circle {
        width: 100px;

        :deep(p) {
          font-size: 10px;
        }
      }
    }
  }

  @media (max-width: 400px) {
    .invite {
      gap: 8px;

      &__circle {

        :deep(p) {
          font-size: 9px;
        }
      }

      &__price {
        font-size: 10px;
      }
    }
  }
}
</style>
