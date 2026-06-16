<template>
    <div>
        <h1>YAY. The child escaped.</h1>
        <button @click="restart"> Restart?</button>
    </div>
</template>

<script setup>
import { supabase } from '@/supabase';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

async function restart(){
    const { data: { user }, error: autherror } = await supabase.auth.getUser();
    if (autherror || !user) {
        console.error('Auth error or no user:', autherror);
        return;
    }

    const { error: err } = await supabase
        .from('progress')
        .delete()
        .eq('id', user.id);

    if (err) {
        console.error('Failed to delete progress:', err);
    }
}
</script>

<style scoped>

</style>