import { defineStore, acceptHMRUpdate } from "pinia";
import { http } from "@utils/axios";
import { FlightDataResponse, IBdPayload } from "./IFlightDeals";
import { useCommonStore } from "@store/common/common";

export const useDealsStore = defineStore("flightDeals", () => {
  async function BEST_DEALS(payload: IBdPayload | Record<string,never>) {
    try {
      const response = await http.get(import.meta.env.VITE_BEST_DEALS, {
        params: payload,
      });
      return response as FlightDataResponse;
    } catch (error) {
      useCommonStore().ERROR_ENCOUNTERED()
    }
  }

  return { BEST_DEALS };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDealsStore, import.meta.hot));
}
