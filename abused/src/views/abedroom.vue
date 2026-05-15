<template>
    <div class="space" @click="walkTo"></div>
    <ChildStuff ref="child"></ChildStuff>
</template>

<script setup>
import ChildStuff from '@/components/childStuff.vue';
import { ref } from 'vue';

const child = ref(null)

function walkTo () {
    child.value.walkTo;
}

</script>

<style scoped>
.space{
    width:100vw;
    height: 70vw;
    cursor: crosshair;
    overflow: hidden;
}

</style>