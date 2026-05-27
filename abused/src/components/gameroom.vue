<template>
    <div class="gameContainer">
        <div class="gameScreen" 
        :style="{ backgroundImage: `url(${backgroundImage})` }">
        </div>
        <div class="controlsArea">
            <div class="story" @mousedown="nextLine">{{ storyText }}{{ toolboxText }}{{magazineText}}{{ basementText }}</div>
            <button class="toggleInventory" @click="toggleInventory">
                {{ showInventory ? 'Close Inventory' : 'Open Inventory' }}
            </button>
        </div>
        <div v-if="showInventory" class="inventoryPopup">
                <h3>Your Items</h3>
                <ul>
                    <li v-for="(item, index) in inventory" :key="index">
                        {{ item.name }}
                    </li>
                </ul>
                <button @click="toggleInventory">Close</button>
        </div>
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
        backgroundImage: String
    },
    data() {
        return {
            showInventory: false,

            inventory: [
/*                 { name: "item 1", quantity: 1 },
                { name: "item 2", quantity: 5 } */
            ]
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
.gameContainer {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.gameScreen {
    flex: 1;
    background-color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}
.controlsArea {
    display: flex;
    height: 20%;
}
.story {
    flex: 3;
    background-color: burlywood;
    display: flex;
    justify-content: center;
    align-items: center;
}
.toggleInventory {
    flex: 1;
    background-color: blue;
    color: white;
    cursor: pointer;
}
.inventoryPopup {
    background-color: brown;
    position: fixed;
    height: 75%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
}
</style>