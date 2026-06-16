<template>
</template>

<script setup>
import { supabase } from '@/supabase';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

onMounted( async ()=>{
    const { data: { user }, error: autherror } = await supabase.auth.getUser();
    const {data: userP, error: err} = await supabase.from('progress').select('*').eq('id', user.id).maybeSingle()
    if (userP === null){
        const { data: { user }, error: autherror } = await supabase.auth.getUser();
        const {data: userP, error: err} = await supabase.from('progress').insert({id: user.id, stage: 'intro'}).select('*')
        router.push(`/${userP.stage}`)
    }else{ 
    router.push(`/${userP.stage}`)}
})


</script>

<style>

</style>