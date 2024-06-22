<template>
    <div class="data">  
<a  v-for="s in store.Forminfo" :key='s.id' href="#" class=" data block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">login info</h5>
<p>{{ s.id }}</p>
    <p>{{ s.email }}</p>
    <p>{{ s.pass }}</p>
    <p>{{ s.firatname }}</p>
    <p>{{ s.lastname }}</p>
    <p>{{ s.pho }}</p>
    <p>{{ s.company }}</p>

</a>
</div>
      
    
</template>

<script setup>
import {useTaskStore} from "../stores/TaskStore";

const store = useTaskStore()


</script>

<style scoped>
.data{
    padding: 10px;
}
</style>