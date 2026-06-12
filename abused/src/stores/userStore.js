import { defineStore } from 'pinia';
import { ref } from 'vue';
import { supabase } from '@/supabase'; // Import the central instance

export const userStore = defineStore('myData', () => {
  const records = ref([]);
  const inventory = ref([]);

  const fetchRecords = async () => {
    const { data } = await supabase.from('progress').select('*');
    records.value = data;
  };

  const addItem = (item) => {
    const exists = inventory.value.some(i => i.name === item.name);
    if (!exists) {
      inventory.value.push(item);
    }
  };

  const removeItem = (itemName) => {
    inventory.value = inventory.value.filter(i => i.name !== itemName);
  };

  const hasItem = (itemName) => {
    return inventory.value.some(i => i.name === itemName);
  };

  const clearInventory = () => {
    inventory.value = [];
  };

  return { 
    records, 
    fetchRecords, 
    inventory, 
    addItem, 
    removeItem, 
    hasItem, 
    clearInventory 
  };
});