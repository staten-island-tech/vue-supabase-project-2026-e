<template>
    <div class="container">
        <Gameroom
            :storyText="storyLines[currentLine]"
            :nextLine="nextLine"
        />
        <ChairThing
            
        />
    </div>
</template>

<script setup>
import {ref} from 'vue';
import Gameroom from '@/components/gameroom.vue';
import ChairThing from '@/components/chairThing.vue';

const free = ref(false);

const storyLines = [
    "???: GO TO YOUR ROOM YOU BASTARD",
    "???: AND STOP BEING A WASTE OF SPACE",
    "???: GO DO SOMETHING USEFUL IN YOUR LIFE",
    "insert sound effects (locking child to chair + slamming door + MC opening eyes slowly)",
    "Mc: Ughhhh, so close to escaping that time",
    "Mc: Great. Now I'm back to square one.",
    ""
];

const currentLine = ref(0);

const nextLine = () => {
    if (currentLine.value < storyLines.length - 1) {
        currentLine.value++
    }
    if (storyLines[currentLine.value] === ""){
        
    }
}

async function next() {
    const { data: { user }, error: autherror } = await supabase.auth.getUser();
    const {data: userP, error: err} = await supabase
        .from('progress')
        .update({stage: ''})
        .select('*')
        .eq('id', user.id)
        .single()
    router.push(`/${userP.stage}`)
}
</script>

<style scoped>
.next-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 200px;
    height: 60px;
    background-color: #0f0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>