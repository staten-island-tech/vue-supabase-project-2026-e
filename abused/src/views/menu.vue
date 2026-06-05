<template>
<Login/>

</template>

<script setup>
import Login from '@/components/login.vue';
import { supabase } from '@/supabase'

async function signIn(){
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
    if(error) {
        console.error('OAuth error:', error)
    }
}

const { data: { user }, err } = await supabase.auth.getUser();
const email = user.user_metadata.email;
const store = useMyDataStore();



/*
https://supabase.com/docs/reference/javascript/admin-api

*************************FETCH
const { data, error } = await supabase
  .from('characters')
  .select()


*************************UPDATE
const { error } = await supabase
  .from('instruments')
  .update({ name: 'piano' })
  .eq('id', 1)

***************************INSERT
const { error } = await supabase
  .from('countries')
  .insert({ id: 1, name: 'Mordor' })
*/
</script>

<style scoped>


</style>