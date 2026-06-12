<template>
    <div class="">
        <Gameroom
            :backgroundImage="bedroombg"
            :basementText="startLines[currentLine]"
            :nextLine="nextLine"
            :inventory="store.inventory"
        />
        <ChairThing :free="free" @click="chairUnlock"/>
        <ChildWalker v-if="free"/>
        <img :src="bed" class="bed">
        <img :src="door" class="door" @click="lockpick" v-if="!lockpicked">
        <img :src="door" class="door" @click="unlatch" v-if="lockpicked">
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
import { useRouter } from 'vue-router';
import { userStore } from '@/stores/userStore';
import { supabase } from '@/supabase';

const store = userStore();
const free = ref(false)
const currentLine = ref(0)
const startLines = [
    "Ughhhh, so close to escaping that time", 
    "Great. Now I'm back to square one."
]

const lockpicked = ref(false)


function chairUnlock(){
    if(store.hasItem('bobbyPins')){
        free.value = true
    }else{
        alert("I need something to unlock this with...")
    }
}

function lockpick(){
    if(store.hasItem('bobbyPins')){
        lockpicked.value = true
    }else{
        alert("You're not supposed to be here")
    }
}

async function unlatch(){
    if(store.hasItem('ruler')){
        const { data: { user }, error: autherror } = await supabase.auth.getUser();
        const { data, error } = await supabase
            .from('progress')
            .update({ 'stage': 'basement' })
            .eq('id', user.id)
            .select('*')
        const router = useRouter()
        router.push(data)
    }else{
        alert("I need something to unlock this with...")
    }
}

</script>

<style scoped>

</style>