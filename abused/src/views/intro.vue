<template>
    <div class="container">
        <Gameroom
            :storyText="storyLines[currentLine]"
            :nextLine="nextLine"
        />
        <ChairThing
            :free="free"
            :doneCutscene="doneCutscene"
        />
        <div v-if="doneCutscene" class="next-link">
            <router-link to="/bedroom">Next</router-link>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import Gameroom from '@/components/gameroom.vue';
import ChairThing from '@/components/chairThing.vue';

const free = ref(false);
const doneCutscene = ref(false);

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
    if (storyLines[currentLine.value] === ""){
        doneCutscene.value = true;
    }
}

</script>

<style scoped>
.next-link {
    margin-top: 2rem;
    text-align: center;
}

.next-link a {
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    display: inline-block;
}

.next-link a:hover {
    background-color: #0056b3;
}
</style>