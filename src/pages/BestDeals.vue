<template>
  <Header
    :label="
      route.query.city
        ? 'New York City Top Deals'
        : 'Up To 80% Off Biz/First Class Flights'
    "
    :btnText="route.query.city ? 'Get All Deals' : 'Get New York Deals'"
    :onDeals="handleNav"
  />
  <Loader v-if="loader" />
  <cardList v-else>
    <Card
      v-for="item in bestDeals"
      :key="Object.keys(item)[0]"
      :item="item[Object.keys(item)[0]]"
      :date="Object.keys(item)[0]"
    />
  </cardList>
</template>

<script setup lang="ts">
import { Header } from "@widgets/header";
import { Card, Loader } from "@shared/ui";
import { cardList } from "@widgets/cardList";

import { loader, fetchData } from "@composables/useFetch";
import { onMounted, ref, watch } from "vue";

import { useDealsStore } from "@store/index";
import { DataItem, IBdPayload } from "@store/flighDeals/IFlightDeals";
const store = useDealsStore();

import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

let bestDeals = ref<DataItem[] | never[]>([]);

watch(() => route.query, () => {
  getDeals()
});

const handleNav = () => {
  route.query.city ? router.push('/best-deals') : router.push('/best-deals?city=New York')
}

const getDeals = () => {
  const payload: IBdPayload | Record<string,never> = route.query.city ? { city: 'New York' } : {}
  fetchData(() => store.BEST_DEALS(payload), (data) => {
    if (data?.data?.length) bestDeals.value = data.data;
  });
}

onMounted(() => {
  getDeals()
});
</script>
