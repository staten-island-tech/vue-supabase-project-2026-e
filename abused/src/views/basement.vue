<template>
    <div class="basement">
        <Gameroom
            :backgroundImage="basementBg" 
            :basementText="basementLine[currentLine]"
            :nextLine="nextLine"
        />
        <ChildWalker class="child-walker"/>
        <img class="door" @click="openDoor" src="@/assets/door.png" alt="">
        <input type="text" inputmode="numeric">
    </div>
</template>

<script setup>
import ChildWalker from '@/components/childWalker.vue';
import Gameroom from '@/components/gameroom.vue';
import basementBg from '@/assets/basementbg.png';
import {ref, computed, onMounted} from 'vue';

const basement = ref(false);
const currentLine = ref(0)
const basementLine = [
    "As crusty as ever"
]

onMounted(() => {
    basement.value = true;
})

const open = ref(false);
const openDoor = () => {
    open.value = true;
}
</script>

<style>
.basement {
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;
}
.door {
    position: absolute;
    cursor: pointer;
    left: 3%;
    top: 8%;
    transform: rotate(88deg);
    width: 30vw;
    height: 30vh;
}
</style>