<script lang="ts" setup>
defineOptions({ name: "UiDarkSocial" })

interface IProps {
  link: string;
  icon: string;
  name: string;
}

defineProps<IProps>()
</script>

<template>
  <a class="social" :href="link">
    <img
      :alt="name"
      class="social__img"
      :src="icon"
    >
  </a>
</template>

<style lang="scss" scoped>
.social {
  border-radius: 100%;
  border: 1px solid black;
  display: block;
  padding: 8px;
  width: max-content;

  &__img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 549px) {
    padding: 5px;

    &__img {
      width: 6.79vw;
      height: 6.79vw;
    }
  }
}
</style>
