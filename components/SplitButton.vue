<template>

  <div class="splitButton">
    <button v-bind="$attrs" @click="handleClick(label)"
            :class="style"
            type="button">
      <slot>{{ label }}</slot>
    </button>
    <button id="dropdownDefaultButton" :data-dropdown-toggle="id"
            :class="style"
            type="button">▼</button>

    <!-- Dropdown menu -->
    <div :id="id" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul v-for="i in items" class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton">
        <li>
          <a @click="i.command(i.label)"
             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ i.label }}</a>
        </li>

      </ul>
    </div>
  </div>


</template>

<script setup>
const props = defineProps({
  id : {
    type : String,
  },
  label: {
    type: String,
    default: 'Button'
  },
  items:{
    type:Object,
    default: () => []
  }
})



const emit = defineEmits(['label'])

function handleClick(l) {
  emit('label', l)
}

let style = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-none"



</script>

<style scoped>

.splitButton{
  padding: 5px;
  margin: 5px;
}

</style>