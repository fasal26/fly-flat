<template>
  <div :class="$style.flCardContainer">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style module>
.flCardContainer {
  margin: 5rem 5rem;
  display: flex;
  gap: 100px 125px;
  flex-wrap: wrap;
}
</style>