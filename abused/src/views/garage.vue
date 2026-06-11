<template>
    <div class="container">
        <Gameroom
            :backgroundImage="garageBg"
            :toolboxText="displayToolboxText"
            :magazineText="displayMagazineText"
            :inventory="inventory"
            :useItem="useItem"
        />
        <childWalker/>    
        <img class="toolbox" @click="showToolbox" src="@/assets/toolbox.png" alt="toolbox">
        <img class="magazine" @click="showMagazine" src="@/assets/box.png" alt="magazine">
    </div>
</template>

<script setup>
import Gameroom from '@/components/gameroom.vue';
import childWalker from '@/components/childWalker.vue';
import garageBg from '@/assets/garagebg.png'
import {ref} from 'vue';

const displayToolboxText = ref("");
const displayMagazineText = ref("");
const openBox = ref(false);
const inventory = ref([]);

const showToolbox = () => {
    displayToolboxText.value = toolboxLines[0];
    displayMagazineText.value = null;
    openBox.value = true;

    const hasScrewdriver = inventory.value.some(
        item => item.name === "screw driver"
    );

    if (!hasScrewdriver) {
        inventory.value.push({
            name: "screw driver"
        });
        console.log(inventory.value);
    }
}

const useItem = () => {
    toFinish()
}
const router = useRouter();
async function toFinish() {
    const { data: { user }, error: autherror } = await supabase.auth.getUser();
    const {data: userP, error: err} = await supabase
        .from('progress')
        .update({'stage': 'finished'})
        .select('*')
        .eq('id', user.id)
        .single()
    router.push(`/${userP.stage}`)
}

const toolboxLines = [
    "Who needs car keys when you have this?"
];

const magazineLines = [
    "Oops...That's something for older me to look at."
];


const showMagazine = () => {
    displayMagazineText.value = magazineLines[0];
    displayToolboxText.value = null;
}

</script>

<style scoped>
.container {
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;
}
.story {
    margin-top: auto;
    width: 75%;
    height: 20%;
    background-color: burlywood;
}
img {
     position: absolute;
     cursor: grab;
     will-change: transform;
}
.toolbox {
     width: 12vw;
     max-width: 160px;
     height: auto;
     left: 70%;
     top: 70%;
     transform: translate(-50%, -50%);
}
.magazine {
     width: 12vw;
     max-width: 160px;
     height: auto;
     left: 85%;
     top: 70%;
     transform: translate(-50%, -50%);
}
</style>