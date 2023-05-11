<script setup>
import {RouterLink } from 'vue-router'
import {RouterView} from 'vue-router'
</script>

<template>
  <nav class="flex  justify-between bg-blue-500 py-4 px-4 ">
    <div class="flex items-center flex-shrink-0 text-white space-x-8">
      <RouterLink to="/" class="flex items-center space-x-2"> 
        <img 
          alt="Vue logo" 
          class="logo" 
          src="@/assets/logo.svg" 
          width="50" 
          height="50" 
        />
        <span class="font-semibold text-2xl tracking-tight">Poke API</span>
      </RouterLink>
      <div>
        <RouterLink 
          to="/" 
          class="ml-4 text-sm text-white hover:text-gray-200 font-medium"
          :class=" { 'font-bold border-b-2 ': $route.path === '/' }" 
          active-class="active"
          >
          Home
        </RouterLink> 
        <RouterLink 
          to="/about" 
          class="ml-4 text-sm text-white hover:text-gray-200 font-medium" 
          :class=" { 'font-bold border-b-2 ': $route.path === '/about' }"
          active-class="active"
          >
          About
        </RouterLink> 
        <RouterLink 
          to="/pokemon" 
          class="ml-4 text-sm text-white hover:text-gray-200 font-medium" 
          :class=" { 'font-bold border-b-2': $route.path === '/pokemon' }"
          active-class="active"
          >
          Pokemon
        </RouterLink> 
        <RouterLink 
          to="/contacto" 
          class="ml-4 text-sm text-white hover:text-gray-200 font-medium" 
          :class=" { 'font-bold border-b-2': $route.path === '/contacto' }"
          active-class="active"
          >
          Contacto
        </RouterLink> 
      </div>
    </div>
  </nav>

  <RouterView />
</template>



