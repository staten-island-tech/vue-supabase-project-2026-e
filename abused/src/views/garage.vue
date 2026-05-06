<template>
    <div>
        <Gameroom/>
    </div>
    <div class="toolbox" @click="nextLinetool"></div>
    <div class="box" @click="nextLinemag"></div>
</template>

<script setup>
import Gameroom from '@/components/gameroom.vue';
import {ref, computed} from 'vue';

const toolboxLines = [
    "Who needs car keys when you have this?"
];

const magazineLines = [
    "Oops...That's something for older me to look at."
];

const currentLine = ref(0);

const nextLinetool = () => {
    if (currentLine.value < toolboxLines.length - 1) {
        currentLine.value++
    }
}
const nextLinemag = () => {
    if (currentLine.value < magazineLines.length - 1) {
        currentLine.value++
    }
}
</script>

<style scoped>

</style>