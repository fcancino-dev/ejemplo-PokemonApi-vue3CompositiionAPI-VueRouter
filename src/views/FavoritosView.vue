<script setup>
import { useFavoritoStore } from '@/store/favoritos';
import {Search} from '@element-plus/icons-vue'
import { RouterLink } from 'vue-router';
// import { storeToRefs } from 'pinia';

const useFavorito = useFavoritoStore();

// const { favoritos } = storeToRefs(useFavorito); // pinia

const { favoritos } = useFavorito; // composition API
const { remove } = useFavorito;

</script>

<template>
    <div class=" container mx-auto mt-4">
        <h1 class=" text-2xl font-medium mb-5">
        Favoritos
    </h1>
    <p v-if="favoritos.length === 0">Sin favoritos</p>
    <ul v-else>
        <li v-for="poke in favoritos" :key="poke.id">
            <el-card shadow="always" class=" mb-2 box-card"> 
                <div class=" mb-2">{{ poke.id }} - {{ poke.name }}</div>
                <router-link 
                    
                    :to="`/pokemon/${poke.name}`"
                >
                    <el-button text :icon="Search">
                        Mas info
                    </el-button>
                </router-link>
                <el-button
                    @click="remove(poke.id)"
                    type="danger"
                >
                    Eliminar
                </el-button>
            </el-card>
        </li>
    </ul>
    </div>
    
</template>

<style scoped>
.box-card {
  width: 480px;
}
</style>