<template>
</template>

<script setup>
import { supabase } from '@/supabase';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

onMounted( async ()=>{
    const { data: { user }, error: autherror } = await supabase.auth.getUser();
    const {data: userP, error: err} = await supabase.from('progress').select('*').eq('id', user.id).single()
    if (userP){
        router.push(`/${userP.stage}`)
    }else{
        const {data: user, error: err} = await supabase.from('progress').insert({id: user.id, stage: 'intro'}).select('*')
        router.push(`/${user.stage}`)
    }
})


</script>

<style>

</style>