<script lang="ts" setup>
import UiArrowList from '@/ui/UiArrowList.vue';

defineOptions({ name: "RequestSection" });

const requests = [
  "Как найти первый проект или выйти на более крупных клиентов?",
  "Как грамотно откликаться на вакансии, составлять резюме?",
  "Как начать работать в онлайне, если нет опыта?",
  "Как выстроить работу так, чтобы не выгорать и не терять фокус?",
  "Как расти как специалист — по задачам, ответственности и доходу?",
  "Как наладить процессы в команде и выйти из режима «ручного управления»?",
  "Как устроена работа проджекта в разных форматах: запуски, клубы, онлайн-школы, сообщества?",
  "Как определить свою зону ответственности, профессиональные границы и усилить позиционирование?",
  "Как наладить процессы и выйти из режима «тушения пожаров»?",
]

</script>

<template>
  <section class="request">
    <h2 class="request__title">Чаще всего <span>ко мне обращаются</span> с&nbsp;такими запросами:</h2>

    <UiArrowList :list="requests" class="request__list" />
  </section>
</template>

<style lang="scss" scoped>
.request {
  padding: {
    top: 80px !important;
    bottom: 80px !important;
  };

  &__title {
    max-width: 70%;
    @include h2;
  }

  &__list {
    margin-top: 50px;
  }

  @media (max-width: 1023px) {
    padding: {
      top: 50px !important;
      bottom: 50px !important;
    };

    &__list {
      margin-top: 30px;
    }
  }

  @media (max-width: 767px) {
    &__title {
      max-width: 400px;
    }
  }

  @media (max-width: 549px) {
    padding: {
      // top: 30px !important;
    };
  }
}
</style>
