<script setup lang="ts">
import { ErrorPage } from '@shared/ui';
import { NavBar } from '@widgets/navbar';
import { useCommonStore } from './store';

const commonStore = useCommonStore()
</script>

<template>
  <ErrorPage v-if="commonStore.error"/>
  <template v-else>
    <NavBar/>
    <RouterView/>
  </template>
</template>

<style scoped>
</style>
