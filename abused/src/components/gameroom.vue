<template>
        <div class="gameScreen" 
        :style="{ backgroundImage: `url(${backgroundImage})` }">
        </div>
        <div class="controlsArea">
            <div class="story" @mousedown="nextLine">
                {{ storyText }}{{ toolboxText }}{{magazineText}}{{ basementText }}
            </div>
            <button class="toggleInventory" @click="toggleInventory">
                {{ showInventory ? 'Close Inventory' : 'Open Inventory' }}
            </button>
        </div>
        <div v-if="showInventory" class="inventoryPopup">
                <h3>Your Items</h3>
                <ul>
                    <li v-for="(item, index) in inventory" :key="index">
                        {{ item.name }}
                        <button @click="useItem">Use item</button>
                    </li>
                </ul>
                <button @click="toggleInventory">Close</button>
        </div>
</template>

<script>
export default {
    props: {
        storyText: String,
        toolboxText: String,
        magazineText: String,
        basementText: String,
        nextLine: Function,
        backgroundImage: String,
        useItem: Function,
        inventory: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            showInventory: false
        }
    },
    methods: {
        toggleInventory() {
            this.showInventory = !this.showInventory
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');

.gameScreen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background-color: black;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
}
.controlsArea {
    display: flex;
    height: 20%;
}
.story {
    width: 75%;
    height: 20%;
    background-color: #BDBBB0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    font-family: 'Cinzel', serif;
}
.toggleInventory {
    width: 25%;
    height: 20%;
    background-color: #8A897C;
    color: white;
    display: grid;
    place-items: center;
    position: absolute;
    bottom: 0;
    right:0;
    font-family: 'Cinzel', serif;
}
.inventoryPopup {
    background-color: #D2D7DF;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    font-family: 'Cinzel', serif;
}
</style>
