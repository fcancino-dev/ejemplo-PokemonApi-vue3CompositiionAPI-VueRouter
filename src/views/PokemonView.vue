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
        <div class=" mt-4">
            <el-alert v-if="error"  type="error" show-icon  effect="dark" class=" ">
                <span class=" font-bold text-sm">{{ error }}</span>
            </el-alert>
        </div>
        <div v-if="data">
            <el-col :span="4" class=" border mt-4" >
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