<template>
  <div>
    Technical Error!, Please click try again or refresh the page
    <button @click="reload"> Try again. </button>
  </div>
</template>

<script setup>

const reload = () => {
  window.location.reload()
}
</script>