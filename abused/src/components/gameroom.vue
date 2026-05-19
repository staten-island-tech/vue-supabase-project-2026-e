<template>

        <div class="gameScreen"></div>
        <div class="story" @mousedown="nextLine">{{ storyText }}{{ toolboxText }}{{magazineText}}{{ basementText }}</div>
        <button class="toggleInventory">
            {{ showInventory ? 'Close Inventory' : 'Open Inventory' }}
        </button>
        <div v-if="showInventory" class="inventoryPopup">
            <h3>Your Items</h3>
            <ul>
                <li v-for="(item, index) in inventory" :key="index">
                    {{ item.name }}
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
        nextLine: Function
    },
    data() {
        return {
            showInventory: false,

            inventory: [
                { name: "item 1", quantity: 1 },
                { name: "item 2", quantity: 5 }
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
.container {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: black;

}
.gameScreen {
    height: 80%;
}
.story {
    margin-top: auto;
    width: 75%;
    height: 20%;
    background-color: burlywood;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
}
.toggleInventory {
    margin-top: auto;
    width: 25%;
    height: 20%;
    background-color: blue;
    color: white;
    display: grid;
    place-items: center;
    position: absolute;
    bottom: 0;
    right:0;
}
.inventoryPopup {
    background-color: brown;
}
</style>