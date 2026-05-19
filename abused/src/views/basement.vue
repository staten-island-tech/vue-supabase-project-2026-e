<template>
    <div class="basement">
        <Gameroom 
        :basementText="basementLine[currentLine]"
        :nextLine="nextLine"
        />
    </div>
</template>

<script setup>
import Gameroom from '@/components/gameroom.vue';

import {ref, computed, onMounted} from 'vue';

const basement = ref(false);
const currentLine = ref(0)
const basementLine = [
    "As crusty as ever"
]
const nextLinebasement = () => {
    if (currentLine.value < basementLine.length - 1) {
        currentLine.value++
    }
}

onMounted(() => {
    basement.value = true;
})
</script>

<style scoped>

</style>