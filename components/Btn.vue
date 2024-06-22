<template>

<div>
  <button @click="$attrs.disable? null : $emit('myEvent',$attrs.lable)"  :disable="$attrs['disable']"  :class="$attrs['class']">{{$attrs.lable}}</button>
</div>

</template>

<script setup></script>