<template>
<button class="button" @click="signIn">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">PLAY</span>
    </span>
</button>

</template>

<script setup>
import { supabase } from '@/supabase'
import { onBeforeMount, onMounted, ref } from 'vue';

async function signIn(){
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        }
    ,})
    if(error) {
        console.error('OAuth error:', error)
    }
}

const loading = ref(true)
const loggedIn = ref(false)
const exists = ref(false)
const user = ref(null)

async function checkTable() {
  const {data: {user: authUser}, error: userError} = await supabase.auth.getUser()
  if (userError) throw userError
  loggedIn.value = !!authUser
  user.value = authUser
  if(!authUser){
    exists.value = false
  }
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq(email)   
    .maybeSingle()
  
  if (error) throw error
  existsInTable.value = !!data
  profileRow.value = data
}

onMounted(async () => {
  try{
    await
    checkUserInTable()
  } catch (e) {
    console.error('Auth/table check failed:', e) 
    isLoggedIn.value = false
    existsInTable.value = false
  } finally{
      loading.value = false
  }
  unsubscribe = supabase.auth.onAuthStateChange(async(event) => {
    if(event === 'INITIAL_SESSION' || event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        loading.value = true     
    try{       
      await checkUserInTable()
    } catch (e) {
      console.error('Auth/table check failed:', e)
      existsInTable.value = false
    } finally {
      loading.value = false
      }
    }
  })
})


onBeforeUnmount(() => {
  unsubscribe?.data?.subscription?.unsubscribe?.()
  
// If your supabase-js version returns a different shape, tell me and I’ll adjust.

})



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
/* From Uiverse.io by mrhyddenn */ 
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: relative;
  padding: 8px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
}

.button::before,
.button::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  height: calc(50% - 5px);
  border: 1px solid #7D8082;
  transition: all .15s ease;
}

.button::before {
  top: 0;
  border-bottom-width: 0;
}

.button::after {
  bottom: 0;
  border-top-width: 0;
}

.button:active,
.button:focus {
  outline: none;
}

.button:active::before,
.button:active::after {
  right: 3px;
  left: 3px;
}

.button:active::before {
  top: 3px;
}

.button:active::after {
  bottom: 3px;
}

.button_lg {
  position: relative;
  display: block;
  padding: 10px 20px;
  color: #fff;
  background-color: #0f1923;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px transparent;
}

.button_lg::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background-color: #0f1923;
}

.button_lg::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4px;
  height: 4px;
  background-color: #0f1923;
  transition: all .2s ease;
}

.button_sl {
  display: block;
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -8px;
  width: 0;
  background-color: #ff4655;
  transform: skew(-15deg);
  transition: all .2s ease;
}

.button_text {
  position: relative;
}

.button:hover {
  color: #0f1923;
}

.button:hover .button_sl {
  width: calc(100% + 15px);
}

.button:hover .button_lg::after {
  background-color: #fff;
}

</style>