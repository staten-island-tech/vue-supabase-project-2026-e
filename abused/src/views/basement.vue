<template>
    <div class="basement">
        <ChildWalker/>
        <Gameroom 
        :basementText="basementLine[currentLine]"
        :nextLine="nextLine"
        />
    </div>
</template>

<script setup>
import ChildWalker from '@/components/childWalker.vue';
import Gameroom from '@/components/gameroom.vue';

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

<style scoped>

</style>