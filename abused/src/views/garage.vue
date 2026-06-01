<template>
    <div class="container">
        <Gameroom
            :backgroundImage="garageBg"
            :toolboxText="displayToolboxText"
            :magazineText="displayMagazineText"
            :nextLine="nextLine"
        />
        <img class="toolbox" @click="showToolbox" src="@/assets/toolbox.png" alt="toolbox">
        <img class="magazine" @click="showMagazine" src="@/assets/box.png" alt="magazine">
        <childWalker/>    
    </div>


</template>

<script setup>
import Gameroom from '@/components/gameroom.vue';
import childWalker from '@/components/childWalker.vue';
import garageBg from '@/assets/garagebg.png'
import {ref, computed} from 'vue';

const currentLine = ref(0);
const displayToolboxText = ref("");
const displayMagazineText = ref("");

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

const showToolbox = () => {
    displayToolboxText.value = toolboxLines[0];
    displayMagazineText.value = null;
}

const showMagazine = () => {
    displayMagazineText.value = magazineLines[0];
    displayToolboxText.value = null;
}

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
}
.toolbox {
    z-index: 1;
}
.magazine {
    width: 50px;
    height: 50px;
    bottom: 310px;
}
</style>