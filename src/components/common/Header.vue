<script lang="ts" setup>
import Container from '../ui/objects/Container.vue'
import UiList from '../ui/objects/UiList.vue'
</script>

<template>
  <header class="header">
    <Container tag="nav" class="header__nav">
      <img alt="Logo Rick and Morty" src="@/assets/logo.png" class="header__brand" />
      <UiList horizontal>
        <router-link to="/" class="header__link" exact-active-class="header__link--active">
          Characters
        </router-link>
      </UiList>
    </Container>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";
@use "@/assets/styles/tools/_mixins.scss";

.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: variables.$z-menu;
  width: 100%;
  color: variables.$text-inverted-color;
  background: variables.$background-dark-color;
  box-shadow: 0 6px 24px -12px variables.$background-darker-color;

  &__brand {
    display: block;
    max-height: 2.3rem;
  }

  &__nav {
    @include mixins.justify;

    padding-top: variables.$spacing-s;
    padding-bottom: variables.$spacing-s;
  }

  &__link {
    color: variables.$text-inverted-color;
    font-weight: 600;
    font-size: variables.$fs-menu;
    letter-spacing: 0.03em;
    text-decoration: none;

    &--separator {
      margin-left: 1.75rem;
    }

    &--cta {
      padding: 0.4em 1em;
      font-size: 0.95em;
      text-transform: uppercase;
      border: solid 2px variables.$primary-color;
      border-radius: 2px;
    }

    &--active {
      color: variables.$text-inverted-color;
      opacity: 0.8;
      cursor: default;
    }

    &:hover {
      color: variables.$text-inverted-color;
      opacity: 0.8;
    }
  }
}
</style>
