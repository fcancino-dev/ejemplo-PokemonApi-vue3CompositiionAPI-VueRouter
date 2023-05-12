<script setup>
import { useCounterStore } from "@/store/counter";
// import { storeToRefs } from "pinia";

const useCounter = useCounterStore();

const {increment,decrement,reset} = useCounter;

const {count,double} = useCounter; // composition API

// const {count,double} = storeToRefs(useCounter); //storeToRefs es una función auxiliar que convierte un store en un objeto reactivo PINIA

</script>

<template>
  <div class=" text-xl font-medium mt-4 container mx-auto">
    <h1>This is an about page</h1>
    <p>Counter: {{ count }}</p>
    <p>Double: {{ double }}</p>
    <button class="border" @click="increment">Increment</button>
    <button class="border" @click="decrement">Decrement</button>
    <button class="border" @click="reset">Reset</button>
  </div>
</template>


