<template>
<div class="area">
  <div></div>

  <textarea v-model="modelValue" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
<!--  <button  @click="$emit('myEvent')"  class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >Push</button>-->
</div>

</template>


<script setup>


// const prop = defineProps(['commen'])
// const emit = defineEmits(['update:commen'])
const modelValue = defineModel()
//
// const updated = (event) => {
//   emit('update:commen', event.target.value)
// }

</script>








<style>
.area{
margin-left: 26%;

width: 54rem;
}
</style>