import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useCommonStore = defineStore("common", () => {
  
  let error = ref(false)
  function ERROR_ENCOUNTERED() {
    error.value = true
  }

  return { ERROR_ENCOUNTERED,error };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot));
}
