<template>
    <div class="basement">
        <Gameroom
            :backgroundImage="basementBg" 
            :basementText="basementLine[currentLine]"
            :nextLine="nextLine"
            :inventory="store.inventory"
        />

        <img 
            class="door" 
            :class="{ 'door-open': doorOpen }"
            @click="openDoor" 
            src="@/assets/door.png"
            alt="door"
        >        
        <ChildWalker class="child-walker"/>
        <div v-if="open" class="keypad-overlay">
            <div class="keypad-container">
                <h2>Enter Code</h2>
                <input 
                    v-model="keypadInput" 
                    type="text" 
                    inputmode="numeric" 
                    placeholder="0000"
                    class="keypad-input"
                    maxlength="4"
                >
                <div class="keypad-buttons">
                    <button v-for="n in 9" :key="n" @click="addDigit(n)">{{ n }}</button>
                    <button @click="addDigit(0)">0</button>
                </div>
                <div class="keypad-actions">
                    <button @click="clearInput" class="clear-btn">Clear</button>
                    <button @click="submitCode" class="submit-btn">Submit</button>
                    <button @click="closeDoor" class="close-btn">Close</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import ChildWalker from '@/components/childWalker.vue';
import Gameroom from '@/components/gameroom.vue';
import basementBg from '@/assets/basementbg.png';
import { supabase } from '@/supabase';
import {ref, computed, onMounted} from 'vue';
import { useRouter } from 'vue-router';
import { userStore } from '@/stores/userStore';

const store = userStore();
const basement = ref(false);
const currentLine = ref(0)
const basementLine = [
    "As crusty as ever"
]

onMounted(() => {
    basement.value = true;
})

const open = ref(false);
const keypadInput = ref('');
const doorOpen = ref(false);
const correctCode = '0125';
const finishedBase = ref(false);

const openDoor = () => {
    if (!doorOpen.value) {
        open.value = true;
        keypadInput.value = '';
    }
}

const router = useRouter();

async function toGarage() {
        const { data: { user }, error: autherror } = await supabase.auth.getUser();
        const { error } = await supabase.from('progress')
            .update({ stage: 'garage' })
            .eq('id', user.id)
            .select('*')
            .single();
        router.push(`/garage`)
}

const closeDoor = () => {
    open.value = false;
    keypadInput.value = '';
}

const addDigit = (digit) => {
    if (keypadInput.value.length < 4) {
        keypadInput.value += digit;
    }
}

const clearInput = () => {
    keypadInput.value = '';
}

const submitCode = async() => {
    if (keypadInput.value === correctCode) {
        doorOpen.value = true;
        finishedBase.value = true;
        closeDoor();
        await toGarage();
    } else {
        alert('Incorrect code. Try again.');
        keypadInput.value = '';
    }
}
</script>

<style scoped>
.basement {
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;
}

.door {
    position: absolute;
    cursor: pointer;
    left: 15%;
    top: 6%;
    transform: rotate(88deg);
    width: 25vw;
    height: 30vh;
    transition: transform 0.3s ease;
}

.door.door-open {
    cursor: default;
}

.keypad-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.keypad-container {
    background-color: #333;
    border: 3px solid #555;
    border-radius: 8px;
    padding: 30px;
    width: 300px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.keypad-container h2 {
    text-align: center;
    color: #fff;
    margin: 0 0 20px 0;
    font-size: 24px;
}

.keypad-input {
    width: 100%;
    padding: 12px;
    font-size: 24px;
    text-align: center;
    letter-spacing: 10px;
    border: 2px solid #555;
    border-radius: 4px;
    background-color: #222;
    color: #0f0;
    margin-bottom: 20px;
    font-family: monospace;
}

.keypad-input::placeholder {
    color: #666;
}

.keypad-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 20px;
}

.keypad-buttons button {
    padding: 15px;
    font-size: 18px;
    background-color: #555;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-weight: bold;
}

.keypad-buttons button:hover {
    background-color: #777;
}

.keypad-buttons button:active {
    background-color: #999;
}

.keypad-actions {
    display: flex;
    gap: 10px;
}

.clear-btn,
.submit-btn,
.close-btn {
    flex: 1;
    padding: 12px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s ease;
}

.clear-btn {
    background-color: #666;
    color: #fff;
}

.clear-btn:hover {
    background-color: #888;
}

.submit-btn {
    background-color: #0f0;
    color: #000;
}

.submit-btn:hover {
    background-color: #0d0;
}

.close-btn {
    background-color: #f00;
    color: #fff;
}

.close-btn:hover {
    background-color: #d00;
}

.link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 200px;
  height: 60px;
  background-color: #0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>