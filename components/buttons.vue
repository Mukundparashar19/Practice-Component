<template>
  <h1>hello worls</h1>







  <div v-for="s in store.newTask" :key="s.id" class="btn">
    <button @click="changeOpen(s.id)" :class="activeId === s.id? 'change': 'unchange' ">{{s.id}}</button>
    <!--    <button @click="onChange2()" :class="toggle.button2? 'change': 'unchange' ">TWO</button>-->
    <!--    <button @click="onChange3()" :class="toggle.button3? 'change': 'unchange' ">THREE</button>-->

  </div>
  <button @click="changeAcc()" :class="openAcc? 'change': 'unchange' ">Oppen accordian</button>
  <div >
    <Accordian
        @my-event1="changeOpen($event)"

       :activeId="activeId"
       :dropp="newOpen"
        :show="openAcc"
    />
  </div>
  <div class="popover">
    <popover  v-for="s in store.newTask" :key="s.id" :data-popover-trigger="(s.id % 2 == 0)? 'hover' : 'click'"
    :obj="s"

    />

  </div>
  <h1>------------------</h1>
  <div class="drawer">
    <Drawer v-for="s in store.newTask" :key="s.id"
            :obj="s"
    />


  </div>
<!--  <Btn  @my-event="store.clicked($event)"-->
<!--      :class="'text-fuchsia-700'"-->
<!--       :lable="'ABCD'"-->
<!--       :disable="false"-->

<!--  />-->
<!--  <Ctn-->
<!--     @click="store.clicked"-->
<!--      :label="'mukund'"-->

<!--     color="orange"-->
<!--  ></Ctn>-->

<div class="sb">
<SplitButton
    @label="store.clicked"
    :items="items"
    id="btn1"
>
 Split Button
</SplitButton>


  <SplitButton
      @label="store.clicked"
      :items="items2"
      id="btn2"
  >
    Split Button 2
  </SplitButton>

</div>


</template>

<script setup>

import {useTaskStore} from "../stores/TaskStore";

const store = useTaskStore()
store.getNewData()


const activeId = ref("");
const newOpen = ref(false);



function changeOpen(id) {
  if (activeId.value === id) {
        activeId.value = null;
  } else {
     activeId.value = id;
  }
   newOpen.value = !newOpen.value;
}

const openAcc = ref(false)
function changeAcc() {
  openAcc.value=!openAcc.value;
}

const items = [
  {
    label: 'abcd',
    command: function (n) {
      console.log('fx-1 ' + n)
    }
  },
  {
    label: '1234',
    command: function (n) {
      console.log('fx-2 ' + n)
    }
  },
  {
    label: 'I II III',
    command: function (n) {
      console.log('fx-2 ' + n)
    }
  },
]



const items2 = [
  {
    label: 'abcd',
    command: function (n) {
      console.log('fx-1 ' + n)
    }
  }
]

</script>

<style scoped>
button{
  padding: 20px;
  color: black;
  border: 2px solid #04AA6D;
  margin: 10px;
}

.popover{
  display:flex;
  justify-content: center;
}

.sb{
  display:flex;
  justify-content: center;
}

.drawer{
  display:flex;
  justify-content: center;
}

.btn {
  display: inline;
}

.change{
  background-color: seagreen;
}

.unchange{
  background-color: white;
}
</style>