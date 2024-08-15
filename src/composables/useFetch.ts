import { useCommonStore } from "@store/index";
import { ref } from "vue";

let loader = ref(false)

const commonStore = useCommonStore()

const fetchData = async <T>(fn: () => Promise<T>,cb: (data: T) => void) => {
  try {
    loader.value = true
    const response = await fn()
    if(response){
      cb(response)
    }
  } catch (err) {
    commonStore.ERROR_ENCOUNTERED()
  } finally {
    loader.value = false
  }
}

export {
  loader,
  fetchData
}