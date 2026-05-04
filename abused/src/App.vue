<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '@/supabase'
  
  const todos = ref([])

  async function getTodos() {
    const { data } = await supabase.from('todos').select()
    todos.value = data
  }

  onMounted(() => {
    getTodos()
  })

</script>

<template>
  <RouterView/>
</template>