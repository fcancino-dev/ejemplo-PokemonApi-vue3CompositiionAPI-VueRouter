// import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// export const useCounterStore = defineStore('counter',() => {   //USANDO PINIA
//     const count = ref(0);
//     const increment = () => count.value++;
//     const decrement = () => count.value--;
//     const reset = () => count.value = 0;
//     const double = computed(() => count.value * 2);

//     return {
//         count,  
//         increment,
//         decrement,
//         reset,
//         double
//     }
// })

export function useCounterStore() {  //USANDO COMPOSITION API
    const count = ref(0);

    const increment = () => count.value++;
    const decrement = () => count.value--;
    const reset = () => count.value = 0;
    const double = computed(() => count.value * 2);

    return {
        count,
        increment,
        decrement,
        reset,
        double
    }
}