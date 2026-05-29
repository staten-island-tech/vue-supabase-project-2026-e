<template>
    <div class="container">
        <Gameroom
            :backgroundImage="garageBg"
            :toolboxText="toolboxLines[currentLine]"
            :nextLine="nextLine"
        />
        <img @click="magazineText" src="@/assets/box.png" alt="">
        <childWalker/>    
    </div>


</template>

<script setup>
import Gameroom from '@/components/gameroom.vue';
import childWalker from '@/components/childWalker.vue';
import garageBg from '@/assets/garagebg.png'
import {ref, computed} from 'vue';

const currentLine = ref(0);

const nextLine = () => {
    if (currentLine.value < storyLines.length - 1) {
        currentLine.value++
    }
}

const toolboxLines = [
    "Who needs car keys when you have this?"
];



const magazineLines = [
    "Oops...That's something for older me to look at."
];


/* const nextLinetool = () => {
    if (currentLine.value < toolboxLines.length - 1) {
        currentLine.value++
    }
}
const nextLinemag = () => {
    if (currentLine.value < magazineLines.length - 1) {
        currentLine.value++
    }
} */
</script>

<style scoped>
.container {
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;
}
.story {
    margin-top: auto;
    width: 75%;
    height: 20%;
    background-color: burlywood;
}
img {
    position: absolute;
    cursor: grab;
    bottom: 0;
    right: 0;
}
</style>