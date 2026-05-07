<template>
    <div class="container">
        <div class="gameScreen"></div>
        <div class="story" @mousedown="nextLine"></div>
        <div class="inventory">Inventory</div>
    </div>
</template>

<script setup>
import {ref, computed} from 'vue';

const storyLines = [
    "???: GO TO YOUR ROOM YOU BASTARD",
    "???: AND STOP BEING A WASTE OF SPACE",
    "???: GO DO SOMETHING USEFUL IN YOUR LIFE",
    //insert sound effects (locking child to chair + slamming door + MC opening eyes slowly)
    "Mc: Ughhhh, so close to escaping that time",
    "Mc: Great. Now I'm back to square one."
];

const currentLine = ref(0);

const nextLine = () => {
    if (currentLine.value < storyLines.length - 1) {
        currentLine.value++
    }
}

</script>

<style scoped>
.container {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: black;
}
.gameScreen {
    height: 80%;
}
.story {
    margin-top: auto;
    width: 75%;
    height: 20%;
    background-color: burlywood;
}
.inventory {
    margin-top: auto;
    width: 25%;
    height: 20%;
    background-color: blue;
    color: white;
    display: grid;
    place-items: center;
}
</style>