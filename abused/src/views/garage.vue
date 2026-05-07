<template>
    <div class="container">
        <div class="story">
            <div class="toolbox" @click="nextLinetool">{{ toolboxLines }}</div>
            <div class="box" @click="nextLinemag"></div>
        </div>
    </div>


</template>

<script setup>
import {ref, computed} from 'vue';

const toolboxLines = [
    "Who needs car keys when you have this?"
];

function lines() {
    console.log(toolboxLines[0])
}

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
.container {
    width: 100vw;
    height: 100vh;
    background-color: blue;
}
.story {
    bottom: 0;
    width: 75%;
    height: 10%;
    background-color: yellow;
}
</style>