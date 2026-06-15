<template>
    <div>
        <h1>YAY. The child escaped.</h1>
    </div>
</template>

<script setup>
import { supabase } from '@/supabase';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

onMounted( async ()=>{
    const { data: { user }, error: autherror } = await supabase.auth.getUser();
    if (autherror || !user) {
        console.error('Auth error or no user:', autherror);
        router.push('/intro');
        return;
    }

    const { error: err } = await supabase
        .from('progress')
        .delete()
        .eq('id', user.id);

    if (err) {
        console.error('Failed to delete progress:', err);
    }

    router.push('/intro');
})
</script>

<style scoped>

</style>