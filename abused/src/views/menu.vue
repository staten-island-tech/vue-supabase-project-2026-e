<template>
    <div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './supabase'

const session = ref(null)
const { data: rows } = await supabase.from('instruments').select('*') // example table

onMounted(async () => {
  const { data } = await supabase.auth.getSession()
  session.value = data.session

  supabase.auth.onAuthStateChange((_event, newSession) => {
    session.value = newSession
  })
})
</script>

<style scoped>

</style>