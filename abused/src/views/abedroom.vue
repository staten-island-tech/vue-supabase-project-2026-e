<template>
    <div class="container">
        <Gameroom
            :backgroundImage="bedroombg"
            :basementText="startLines[currentLine]"
            :nextLine="nextLine"
            :inventory="inventory"
        />
        <img :src="bed" class="bed">
        <img :src="door" class="door" v-if="!free">
        <img :src="door" class="door" @click="lockpick" v-if="!lockpicked, free">
        <img :src="door" class="door" @click="unlatch" v-if="lockpicked">
        <img :src="desk" class="desk" @click="lookDrawer">
        <ChairThing :free="free" @click="chairUnlock"/>
        <ChildWalker v-if="free"/>
        <div v-if="drawerOpen">

        </div>
    </div>
    <Transition v-if="loaded"/>
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

const free = ref(false)
const lockpicked = ref(false)
const drawerOpen = ref(false)

const inventory = ref([])
const currentLine = ref(0)
const startLines = [
    "Mc: Ughhhh, so close to escaping that time",
    "Mc: Great. Now I'm back to square one.",
]

const nextLine = () => {
    if (currentLine.value < storyLines.length - 1) {
        currentLine.value++
    }
}

function accquireBobbypins(){
    
}

function accquireRuler(){
    
}

function chairUnlock(){
    if(inventory.value.some(i => i.name ==='bobbyPins')){
        free.value = true
    }else{
        alert("I need something to unlock this with...")
    }
}

function lockpick(){
    if(inventory.value.some(i => i.name ==='bobbyPins')){
        lockpicked.value = true
    }else{
        alert("You're not supposed to be here")
    }
}

async function unlatch(){
    if(inventory.value.some(i => i.name ==='ruler')){
        const { data: { user }, error: autherror } = await supabase.auth.getUser();
        const { data, error } = await supabase
            .from('progress')
            .update({ 'stage': 'basement' })
            .eq('id', user.id)
            .select('*')
        const router = useRouter()
        router.push(data)
    }else{
        alert("I need something to unlatch this with...")
    }
}

</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
}
.bed{
    height: 30%;
    top: 60%;
    left: 15%;
}
.desk{
    height: 30%;
    top: 60%;
    left: 30%;
}
</style>