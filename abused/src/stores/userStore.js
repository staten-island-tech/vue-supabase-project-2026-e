import { defineStore } from 'pinia';
import { ref } from 'vue';
import { supabase } from '@/supabase'; // Import the central instance

export const userStore = defineStore('myData', () => {
  const records = ref([]);

  const fetchRecords = async () => {
    const { data } = await supabase.from('progress').select('*');
    records.value = data;
  };

  return { records, fetchRecords };
});