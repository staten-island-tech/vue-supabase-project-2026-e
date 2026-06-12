<template>
    <div class="container">
        <Gameroom
            :backgroundImage="bedroombg"
            :storyText="startLines[currentLine]"
            :nextLine="nextLine"
            :inventory="inventory"
        />
        <img :src="door" class="door" v-if="!free">
        <img :src="door" class="door" @click="lockpick" v-if="!lockpicked, free" id="interactable">
        <img :src="door" class="door" @click="unlatch" v-if="lockpicked" id="interactable">
        <img :src="desk" class="desk" @click="lookDrawer" id="interactable">
        <img :src="ruler" class ="ruler" @click="accquireRuler" id="interactable">
        <ChairThing class="chair" :free="free" @click="chairUnlock"/>
        <img :src="bed" class="bed">
        <ChildWalker v-if="free"/>
        <div class="drawer" v-if="drawerOpen">
            <div class="closeth" @click="closeDrawer">Close Drawer</div>
            <img :src="bobbyPin" class="bobbyPins" @click="accquireBobbypins"id="interactable">
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
import ruler from '@/assets/ruler.png';
import bobbyPin from '@/assets/bobbypin.png'
import desk  from '@/assets/desk.png'
import { onMounted, ref } from 'vue';
import Transition from '@/components/transition.vue';
import { useRouter } from 'vue-router';

const free = ref(false)
const lockpicked = ref(false)
const drawerOpen = ref(false)

const loaded = ref(false)
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

function lookDrawer(){
    drawerOpen.value = true
}

function closeDrawer(){
    drawerOpen.value = false
}

function accquireBobbypins(){
    inventory.value.push({name: "Bobby Pin"});
}

function accquireRuler(){
    inventory.value.push({name: "Ruler"});
}

function chairUnlock(){
    if(inventory.value.some(i => i.name ==='Bobby Pin')){
        free.value = true
    }else{
        alert("I need something to unlock this with...")
    }
}

function lockpick(){
    if(inventory.value.some(i => i.name ==='Bobby Pin')){
        lockpicked.value = true
    }else{
        alert("You're not supposed to be here")
    }
}

async function unlatch(){
    if(inventory.value.some(i => i.name ==='Ruler')){
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

onMounted(()=>{
    loaded.value = true
})

</script>

<style scoped>
*{
    font-family: 'Courier New', Courier, monospace;
}
.container{
    width: 100%;
    height: 100%;
}
.bed{
    position: absolute;
    height: 15%;
    top: 65%;
    left: 21%;
    scale: 80% 100%
}
.desk{
    position: absolute;
    height: 30%;
    top: 43%;
    left: 30%;
}
.chair{
    position: absolute;
    height: 30%;
    top: 60%;
    left: 30%;
}
.door{
    position: absolute;
    height: 40%;
    top: 26%;
    left: 55%;
}
.ruler{
    position: absolute;
    height: 10%;
    top: 49%;
    left: 38%;
    scale: 100% 45%;
}
.drawer{
    position: absolute;
    height: 40%;
    width: 50%;
    top: 20%;
    left: 25%;
    background-color: #dd9b69;
}
.closeth{
    position: relative;
    font-size: 50%;
    top: 0%;
    left: 0%;
    background-color: #960c0c;
    color: #ffffff;
    padding: 3%;
}
.bobbyPins{
    height: 40%;
}
#interactable:hover{
    background-color: #ffffff44;
}
</style>