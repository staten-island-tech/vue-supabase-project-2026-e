<template>
    <div class="container">
        <Gameroom
            :storyText="storyLines[currentLine]"
            :nextLine="nextLine"
        />
    </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import Gameroom from '@/components/gameroom.vue';
const storyLines = [
    "???: GO TO YOUR ROOM YOU BASTARD",
    "???: AND STOP BEING A WASTE OF SPACE",
    "???: GO DO SOMETHING USEFUL IN YOUR LIFE",
    "insert sound effects (locking child to chair + slamming door + MC opening eyes slowly)",
    "Mc: Ughhhh, so close to escaping that time",
    "Mc: Great. Now I'm back to square one.",
    ""
];

const currentLine = ref(0);

const nextLine = () => {
    if (currentLine.value < storyLines.length - 1) {
        currentLine.value++
    }
}

</script>

<style scoped>

</style>