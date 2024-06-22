<script setup>
import {useTaskStore} from "../stores/TaskStore";
import { createPinia } from 'pinia';
import { createApp } from 'vue'
import index from './index.vue'
import 'primevue/resources/themes/aura-light-green/theme.css'


const pinia = createPinia()
const app = createApp(index)
app.use(pinia)
const store = useTaskStore()

store.getData()

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})




</script>




<template>
  <Head>
    <Title>Post List</Title>
  </Head>



  <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    <figure  v-for="s in store.task" :key="s.id" class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
      <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{s.email}}</h3>
        <p class="my-4">{{s.id}}</p>
      </blockquote>
      <figcaption class="flex items-center justify-center ">

        <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
          <div> <NuxtLink :to="`/${s.id}`" > {{s.firstname}}  {{s.lastname}}  </NuxtLink> </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 "> </div>
        </div>
      </figcaption>
    </figure>

  </div>
  <div>
    <buttons/>
  </div>

  <div class="buttons">
  <Ctn
      @click="store.clicked"
      :label="'random'"
      hollow="true"
      color="yellow"
     ></Ctn>

  <Ctn
      @click="store.clicked"
      :label="'random'"
      rounded="true"
      color="red"
  >Two</Ctn>

  <Ctn
      @click="store.clicked"
      :label="'random'"
       color="green"
  >Three</Ctn>

  <Ctn
      @click="store.clicked"
      :label="'random'"
      rounded="true"
      color="dark"
      hollow="true"
  >Four</Ctn>
  </div>

<Form/> 

</template>


<style scoped>

.buttons{
  display:flex;
  justify-content: center;
}

button{
  padding: 20px;
  color: black;
  border: 2px solid #04AA6D;
  margin: 10px;
}
/*.change{*/
/*  background-color: seagreen;*/
/*}*/

/*.unchange{*/
/*  background-color: white;*/
/*}*/
.v-application {
  background-color: #00a86b;
}

</style>
