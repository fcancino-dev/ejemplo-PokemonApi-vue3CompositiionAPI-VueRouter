<script setup>
import {useRoute, useRouter} from 'vue-router';
import { useGetData } from '@/composables/getData';

const route = useRoute();
const router = useRouter();

const back = () => {
    router.push('/pokemon');
}

const { data,getData, loading, error } = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script> 

<template>
    <div class=" container mx-auto mt-2">
        <div class=" border-2 pl-2 pb-2">
            <div v-if="loading" class=" text-center">
                <p>Cargando informacion...</p>
            </div>
            <div v-if="error" class="flex bg-red-100 rounded-lg p-4 mb-4 mt-2 mr-2 text-sm text-red-700" role="alert">
                <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                    <span class="font-medium">No existe el Pokemon!.</span> 
                </div>
            </div>
            <div v-if="data">
                <img :src="data.sprites?.front_default" alt="" />
                <h1 class=" text-lg font-medium">PokeName: {{ $route.params.name.toUpperCase() }}</h1>
            </div>
            <button 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                @click="back"
                >
                Back  
            </button>
        </div>
        
    </div>
    
</template>