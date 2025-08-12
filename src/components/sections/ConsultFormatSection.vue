<script lang="ts" setup>
import UiCircleText from '@/ui/UiCircleText.vue';

defineOptions({ name: "ConsultFormatSection" });
</script>

<template>
  <section class="consult">
    <h2 class="consult__title">Формат консультаций <span>появился не случайно</span></h2>
    <p class="consult__description"><span>Ко мне регулярно обращаются</span> коллеги, друзья и специалисты из других команд с вопросами о работе проджект-менеджера, развитии в онлайне и карьерных переходах</p>
    <p class="consult__description"><span>Я поняла, что могу быть полезна не только точечно, но и комплексно</span> — так родилась идея индивидуальных консультаций</p>
    <div class="consult__invite">
      <UiCircleText class="consult__circle" />
      <img class="consult__arrow" src="@/assets/images/icons/long-arrow.svg" alt="arrow icon" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
