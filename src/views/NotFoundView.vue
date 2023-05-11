<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const volver = () => {
    router.push('/');
}

</script>

<template>
    <div class=" container mx-auto mt-4 text-center">
        <h1 class=" text-[150px] font-bold text-blue-500">404 </h1>
        <h2 class=" text-8xl font-semibold">PAGE NOT FOUND</h2>
        <button @click="volver" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">Back to Home</button>
    </div>
    
</template>