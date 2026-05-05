<template>
    <div>
        <Gameroom/>
        <div class="story" v-if="basement">{{ nextLinebasement }}</div>
    </div>
</template>

<script>
import Gameroom from '@/components/gameroom.vue';

import {ref, computed, onMounted} from 'vue';

const basement = ref(false);
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
#child{
    background-image: url(@/assets/childWalk.png);
    background-size: cover;
    position: absolute;
    height: 320px;
    width: 200px;
}
</style>