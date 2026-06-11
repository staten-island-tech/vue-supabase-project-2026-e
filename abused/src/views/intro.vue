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
    "insert sound effects (locking child to chair + slamming door + MC opening eyes slowly)",
    ""
];

const currentLine = ref(0);

const nextLine = () => {
    if (currentLine.value < storyLines.length - 1) {
        currentLine.value++
    }
    if (storyLines[currentLine.value] === ""){
        next();
    }
}
const router = useRouter();
async function next() {
    const { data: { user }, error: autherror } = await supabase.auth.getUser();
    const {data: userP, error: err} = await supabase
        .from('progress')
        .update({'stage': 'bedroom'})
        .select('*')
        .eq('id', user.id)
        .single()
    router.push(`/${userP.stage}`)
}
</script>

<style scoped>

</style>