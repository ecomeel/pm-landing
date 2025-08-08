<script lang="ts" setup>
defineOptions({ name: "UiNumberedList" });

defineProps<{
  list: Record<"title" | "description", string>[]
}>()
</script>

<template>
  <ul class="list">
    <li class="list__item item" v-for="(item, index) in list" :key="index">
      <p class="item__number">{{ `0${index + 1}` }}</p>
      <div class="item__text-wrapper">
        <h3 class="item__title">{{ item.title }}</h3>
        <p class="item__description">{{ item.description }}</p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
  gap: 20px 100px;

  .item {
    display: flex;
    gap: 40px;

    &__number {
      margin-top: -40px;
      font-family: "Cormorant";
      font-weight: 400;
      font-style: italic;
      color: $beige-color;
      font-size: 100px;
    }

    &__title {
    text-transform: uppercase;
    @include body-2-bold;
    font-weight: 700;
    }

    &__description {
      margin-top: 8px;
      @include body-2;
    }
  }

  @media (max-width: 1023px) {
    gap: 20px 30px;

    .item {
      gap: 25px;

      &__number {
        margin-top: -30px;
        font-size: 70px;
      }
    }
  }

  @media (max-width: 549px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    gap: 20px;

    .item {
      gap: 16px;
    }
  }
}
</style>
