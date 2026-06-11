<template>
</template>

<script setup>
import { supabase } from '@/supabase';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
// restructure/ not put as a page??

const router = useRouter()

onMounted( async ()=>{
    const { data: { user }, error: autherror } = await supabase.auth.getUser();
    const {data: userP, error: err} = await supabase.from('progress').select('*').eq('id', user.id).single()
    router.push(`/${userP.stage}`)
})


</script>

<style>

</style>