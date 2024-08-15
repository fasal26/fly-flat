<template>
  <div :class="$style['header-container']">
    <div :class="$style['header-items']">
      <p>FLYFLAT DEALS</p>
      <h1>{{ label }}</h1>
      <button :class="$style.detailsButton" @click="emits('deals')">{{ btnText }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['label','btnText'])
const emits = defineEmits(['deals'])

</script>

<style module>
  .header-container{
    background: #0F1E33;
    padding: 30px;
    display: flex;
    justify-content: center;
    color: #fff;
    min-height: 248px;
    align-items: center;
  }

  .header-items{
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  .header-items > p{
    color: #FF943D;
  }

  .detailsButton {
    background-color: #FF943D;
    color: white;
    border: none;
    width: 50%;
    padding: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
  }
</style>