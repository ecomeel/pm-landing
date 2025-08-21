<script lang="ts" setup>
import UiArrowList from '@/ui/UiArrowList.vue'
import { animate, onScroll, stagger } from 'animejs'
import { onMounted } from 'vue'

defineOptions({ name: "RequestSection" })

const requests = [
  "<span>Как найти</span> первый проект или выйти на более крупных клиентов?",
  "<span>Как грамотно</span> откликаться на вакансии, составлять резюме?",
  "<span>Как начать</span> работать в онлайне, если нет опыта?",
  "<span>Как выстроить</span> работу так, чтобы не выгорать и не терять фокус?",
  "<span>Как расти</span> как специалист — по задачам, ответственности и доходу?",
  "<span>Как наладить</span> процессы в команде и выйти из режима «ручного управления»?",
  "<span>Как устроена</span> работа проджекта в разных форматах: запуски, клубы, онлайн-школы, сообщества?",
  "<span>Как определить</span> свою зону ответственности, профессиональные границы и усилить позиционирование?",
  "<span>Как наладить</span> процессы и выйти из режима «тушения пожаров»?",
]

onMounted(() => {
  animate(".request__list #arrowListItem", {
    x: ["-100vw", 0],
    delay: stagger(150),
    duration: 800,
    autoplay: onScroll({
      container: ".page",
      target: ".request__list",
    })
  })
})
</script>

<template>
  <section class="request">
    <h2 class="request__title">
      Чаще всего <span>ко мне обращаются</span> с&nbsp;такими запросами:
    </h2>

    <UiArrowList class="request__list" :list="requests" />
  </section>
</template>

<style lang="scss" scoped>
.request {
  padding: {
    top: 80px;
    bottom: 80px;
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
      top: 50px;
      bottom: 50px;
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
}
</style>
