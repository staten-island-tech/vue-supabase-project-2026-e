<template>
    <div class="container">
        <Gameroom
            :toolboxText="toolboxLines[currentLine]"
            :nextLine="nextLine"
        />
        <childWalker/>
    </div>


</template>

<script setup>
import Gameroom from '@/components/gameroom.vue';
import childWalker from '@/components/childWalker.vue';

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

</style>