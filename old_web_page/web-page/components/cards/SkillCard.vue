<script setup lang="ts">
import {useCounterStore} from "~/plugins/stores/counterStore";

const counterStore = useCounterStore()
const {count, increment} = counterStore
</script>

<template>
   <h1>{{ count }}</h1>
   <button @click="() => {increment(1)}">+1</button>
</template>

<style scoped>
button {
   //outline: 1px black;
}
</style>