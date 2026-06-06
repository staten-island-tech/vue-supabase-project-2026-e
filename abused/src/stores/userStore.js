import { defineStore } from 'pinia';
import { ref } from 'vue';
import { supabase } from '@/supabase'; // Import the central instance

export const useMyDataStore = defineStore('myData', () => {
  const records = ref([]);

  const fetchRecords = async () => {
    const { data } = await supabase.from('users').select('*');
    records.value = data;
  };

  return { records, fetchRecords };
});