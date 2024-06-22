<template>
<div class="pop">



  <button :data-popover-target="'popover-default-' + props.obj.id"   :data-popover-trigger="$attrs['data-popover-trigger']" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{obj.firstname}}</button>

  <div data-popover :id="'popover-default-' + props.obj.id" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
      <h3 class="font-semibold text-gray-900 dark:text-white">{{obj.firstname}} {{obj.lastname}}</h3>
    </div>
    <div class="px-3 py-2">
      <p>Email ID:  {{obj.email}}</p>
      <p>Username:  {{obj.login.username}}</p>
      <p>Password:  {{obj.login.password}}</p>
      <p>Registered: {{obj.login.registered}}</p>
      <p>Address: {{obj.address.street}}</p>
      <p>City: {{obj.address.city}}</p>
      <p>Zip code: {{obj.address.zipcode}}</p>
      <p>Mobile No: {{obj.phone}}</p>
      <p>Website: {{obj.website}}</p>



    </div>
    <div data-popper-arrow></div>
  </div>





</div>
</template>

<script setup>
const props = defineProps({
  obj:{
    type:Object
  }
})

import {initPopovers} from "flowbite/lib/cjs/components/popover";

onMounted(() => {
  initPopovers();
})
</script>

<style scoped>
.pop{
  padding: 20px;
}


</style>