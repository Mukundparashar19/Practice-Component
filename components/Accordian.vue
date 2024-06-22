<template>

  <div v-if="show" id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
    <div v-for="s in store.newTask" :key="s.id" >
    <h2 id="accordion-color-heading-1">
      <button  @click="$emit('myEvent1',s.id); oon(s.id); " type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
        <span>{{s.firstname}}</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div  id="accordion-color-body-1" :class= "(props.activeId==s.id)? '' : 'hidden'"  aria-labelledby="accordion-color-heading-1">
      <div v-if="s.login" class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p  class="mb-2 text-gray-500 dark:text-gray-400"> Full Name : {{s.firstname}} {{s.lastname}}</p>
        <p  class="mb-2 text-gray-500 dark:text-gray-400">Email ID:  {{s.email}}.</p>
        <p  class="mb-2 text-gray-500 dark:text-gray-400">Verification:  {{s.login.uuid}}.</p>
        <p  class="mb-2 text-gray-500 dark:text-gray-400">Username:  {{s.login.username}}.</p>
        <p  class="mb-2 text-gray-500 dark:text-gray-400">Password:  {{s.login.password}}.</p>
        <p  class="mb-2 text-gray-500 dark:text-gray-400">Registered: {{s.login.registered}}.</p>
        <p  class="mb-2 text-gray-500 dark:text-gray-400">Address: {{s.address.street}}.</p>
        <p  class="mb-2 text-gray-500 dark:text-gray-400"> {{s.address.suite}}.</p>
        <p  class="mb-2 text-gray-500 dark:text-gray-400">City: {{s.address.city}}.</p>
        <p  class="mb-2 text-gray-500 dark:text-gray-400">Zip code: {{s.address.zipcode}}.</p>
        <p  class="mb-2 text-gray-500 dark:text-gray-400">Mobile No: {{s.phone}}.</p>
        <p  class="mb-2 text-gray-500 dark:text-gray-400">Website: {{s.website}}.</p>
        <p  class="mb-2 text-gray-500 dark:text-gray-400">Company Name: {{s.company.name}}.</p>
        <p  class="mb-2 text-gray-500 dark:text-gray-400">Company Catchphrase: {{s.company.catchPhrase}}.</p>
      </div>
    </div>

    </div>
  </div>

</template>

<script setup>
// const activeIdB = ref()
// const on = ref(false)
// function oon(id) {
//   activeIdB.value = id;
//   console.log('child open? -', on.value)
//   on.value = !on.value
//   console.log('child open? -', on.value)
//
// }

const props = defineProps({

  show:{
    type: Boolean,
    required:true
  },
  dropp:{
    type: Boolean,
    required:true
  },
  activeId:{
    type: Number
  },
 })







import {useTaskStore} from "../stores/TaskStore";
const store = useTaskStore()
store.getNewData()

// :class="open.button3? '': 'hidden'"
// || (on && activeIdB==s.id)
</script>