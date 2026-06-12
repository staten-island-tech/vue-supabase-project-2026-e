<template>
    <div class="container">
        <Gameroom
            :backgroundImage="garageBg"
            :toolboxText="displayToolboxText"
            :magazineText="displayMagazineText"
            :inventory="store.inventory"
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
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase';
import { userStore } from '@/stores/userStore';

const store = userStore();
const displayToolboxText = ref("");
const displayMagazineText = ref("");
const openBox = ref(false);
const router = useRouter();

const showToolbox = () => {
    displayToolboxText.value = toolboxLines[0];
    displayMagazineText.value = null;
    openBox.value = true;

    if (!store.hasItem("screw driver")) {
        store.addItem({
            name: "screw driver"
        });
        console.log(store.inventory);
    }
}

const useItem = () => {
    toFinish()
}
async function toFinish() {
const { data: { user }, error: autherror } = await supabase.auth.getUser();
    if (autherror || !user) {
        console.error("Auth error:", autherror);
        router.push('/finished');
        return;
    }
    const { data: userP, error: err } = await supabase
        .from('progress')
        .update({ 'stage': 'finished' })
        .eq('id', user.id)
        .select('*')
        .single();
        router.push(`/${userP.stage || 'finished'}`);
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