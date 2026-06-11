<template>
    <div class="">
        <Gameroom
            :backgroundImage="bedroombg"
            :nextLine="nextLine"
            :inventory="inventory"
        />
        <ChairThing :free="free" @click="chairUnlock"/>
        <ChildWalker v-if="free"/>
        <img :src="bed" class="bed">
        <img :src="door" class="door">
        <img :src="desk" class="desk">
    </div>
    <Transition/>
</template>

<script setup>
import ChairThing from '@/components/chairThing.vue';
import ChildWalker from '@/components/childWalker.vue';
import Gameroom from '@/components/gameroom.vue';
import bedroombg from '@/assets/bedroombg.png';
import bed from '@/assets/bed.png';
import door from '@/assets/door.png';
import { ref } from 'vue';
import Transition from '@/components/transition.vue';

const free = ref(false)
const inventory = ref([])



function chairUnlock(){
    if(inventory.value.some(i => i.name==='bobbyPins')){
        
    }else{

    }
}

</script>

<style scoped>

</style>