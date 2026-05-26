<template>
    <div class="basement">
        <Gameroom
        :backgroundImage="basementBg" 
        :basementText="basementLine[currentLine]"
        :nextLine="nextLine"
        />
        <ChildWalker class="child-walker"/>
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
</script>

<style>
.child-walker {
    position: absolute;
    margin-top: auto;
}
</style>