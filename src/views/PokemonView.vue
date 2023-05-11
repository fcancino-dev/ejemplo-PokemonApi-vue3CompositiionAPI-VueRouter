<script setup>
import {RouterLink} from 'vue-router';
import { useGetData } from '@/composables/getData';
import {  ArrowLeft, ArrowRight } from '@element-plus/icons-vue'


const { data, getData,loading, error } = useGetData();

getData('https://pokeapi.co/api/v2/pokemon');

</script>

<template>
    <div class=" container mx-auto">
        <!-- <h1 class=" text-xl font-medium mt-2">Pokemon</h1> -->
        <div v-if="loading" class=" text-center">
            <p>Cargando informacion...</p>
        </div>
        <div v-if="error" class="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700" role="alert">
            <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div>
                <span class="font-medium">{{ error }}</span>
            </div>
        </div>
        <div v-if="data">
            <el-col :span="3" class=" border mt-4" >
                <li
                    class="mx-4 list-none"
                    v-for="poke in data.results" 
                    :key="poke.id"
                >
                    <el-button link type="primary">
                        <RouterLink  :to="`/pokemon/${poke.name}`">
                            {{ poke.name }}
                        </RouterLink>
                    </el-button>
                 </li>
            </el-col>
            <el-button-group class=" mt-2">
                <el-button 
                    :disabled="!data.previous"
                    type="primary" 
                    :icon="ArrowLeft" 
                    @click="getData(data.previous)"
                >
                    Prev
                </el-button>
                <el-button
                    :disabled="!data.next"
                    type="primary"
                    @click="getData(data.next)"
                >
                    Next
                    <el-icon class="el-icon--right"><ArrowRight /></el-icon>
                </el-button>
            </el-button-group>            
        </div>
    </div>
    
</template>