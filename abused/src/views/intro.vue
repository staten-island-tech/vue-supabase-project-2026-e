<template>
    <div class="container">
        <Gameroom
            :storyText="storyLines[currentLine]"
            :nextLine="nextLine"
        />
    </div>
</template>

<script setup>
import {ref} from 'vue';
import Gameroom from '@/components/gameroom.vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase';


const storyLines = [
    "???: GO TO YOUR ROOM YOU BASTARD",
    "???: AND STOP BEING A WASTE OF SPACE",
    "???: GO DO SOMETHING USEFUL IN YOUR LIFE",
    "Sound of the slam of a door"
];

const currentLine = ref(0);
const isTransitioning = ref(false);
const nextLine = () => {
    if (isTransitioning.value) {
        return;
    }
    if (currentLine.value < storyLines.length - 1) {
        currentLine.value++
    } else {
        isTransitioning.value = true;
        next();
    }
}
const router = useRouter();
async function next() {
    const { data: { user }, error: autherror } = await supabase.auth.getUser();
    if (autherror || !user) {
        console.error("Auth error:", autherror);
        router.push('/bedroom');
        return;
    }
    const { data: userP, error: err } = await supabase
        .from('progress')
        .update({ 'stage': 'bedroom' })
        .eq('id', user.id)
        .select('*')
        .single();
        router.push(`/${userP.stage || 'bedroom'}`);
}
</script>

<style scoped>

</style>