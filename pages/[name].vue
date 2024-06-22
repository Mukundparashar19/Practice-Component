<template>
  <Head>
    <Title>{{store.indi.firstname}}'s information</Title>
  </Head>


  <div v-if="store.indi"
       class=" container   p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ store.indi.firstname }}
      {{ store.indi.lastname }}</h5>
    <div v-if="store.indi.login">
      <p class="font-normal text-gray-700 dark:text-gray-400">Here are the details of the Person</p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span
          class="font-semibold text-gray-900">Email Id: </span> {{ store.indi.email }}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span class="font-semibold text-gray-900">DOB: </span>
        {{ store.indi.birthDate }}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span
          class="font-semibold text-gray-900">Login Id: </span>{{ store.indi.login.uuid }}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span
          class="font-semibold text-gray-900">Username: </span>{{ store.indi.login.username }}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span
          class="font-semibold text-gray-900">Password: </span>{{ store.indi.login.password }}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span
          class="font-semibold text-gray-900">Registration: </span>{{ store.indi.login.registered }}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span class="font-semibold text-gray-900">Street: </span>{{ store.indi.address.street }}
      </p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span
          class="font-semibold text-gray-900">Apartment: </span>{{ store.indi.address.suite }}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span
          class="font-semibold text-gray-900">City: </span>{{ store.indi.address.city }}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span
          class="font-semibold text-gray-900">Zip code: </span>{{ store.indi.address.zipcode }}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span
          class="font-semibold text-gray-900">Mobile No: </span>{{ store.indi.phone }}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span class="font-semibold text-gray-900">Official Website: </span>{{ store.indi.website }}
      </p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span
          class="font-semibold text-gray-900">Company Name: </span>{{ store.indi.company.name }}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400"><span class="font-semibold text-gray-900">Company Catch Phrase: </span>{{ store.indi.company.catchPhrase }}
      </p>
    </div>
  </div>
  <div class="container" v-for="a in add">{{ a.text }}</div>
  <div>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Comment</label>
    <textArea v-model="comment"
              @my-event="added"
    />
    <button
        class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        @click="added">push
    </button>
  </div>
  <div>

  </div>


</template>

<script setup>
import {useTaskStore} from "../stores/TaskStore";
import {ref} from "vue";

const comment = ref("")
const add = ref([])

const added = () => {
  add.value.push({
    text: comment.value
  })
  comment.value = ""
}

const {name} = useRoute().params

const store = useTaskStore()
// passed name as prop
await store.indiData(name)
console.log(store.indi)
</script>

<style scoped>
.container {
  margin-left: 26%;
  background-color: gainsboro;
  color: navy;
  width: 54rem;
}

label {
  margin-left: 26%;

  width: 54rem;
}

button {
  margin-left: 26%;

  width: 54rem;
}
</style>

