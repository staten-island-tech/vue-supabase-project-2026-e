<template>
    <div class="room" @click="walkTo" v-if="not">    </div>
        <div id="child" :class="action" :style="{left: charX + 'px', transition: timeWalk + 's'}"></div>

</template>

<script setup>
import { ref } from 'vue';

const action = ref("stand-tr")
const charX = ref(100)
const timeWalk = ref(0)
const distance = ref(0)
const not = ref(true)

const walkTo = async (event) =>{
    not.value = true
    if(charX.value < (event.clientX-100)){
        distance.value = event.clientX - charX.value
        timeWalk.value = distance.value/300
        action.value = "walking-ltr"
        setTimeout(()=> {
            action.value = "stand-tr"
            not.value = false
        }, timeWalk)
    } else{
        distance.value = charX.value - event.clientX 
        timeWalk.value = distance.value/300
        action.value = "walking-rtl"
        setTimeout(()=> {
            action.value = "stand-tl"
            not.value = false
        }, timeWalk)
    }
    charX.value = event.clientX - 100
}

</script>

<style scoped>
.room{
    width:100vw;
    height: 70vw;
    background-color: red;
    cursor: crosshair;
    overflow: hidden;
}
.chair{
    background-image: url(@/assets/childWakeup.png);
    background-size: cover;
    position: absolute;
    height: 320px;
    width: 200px;
}

#child{
    background-image: url(@/assets/childWalk.png);
    background-size: cover;
    position: absolute;
    height: 320px;
    width: 200px;
    top: 300px;
}

.stand-tl{
    background-position: 0px;
}
.stand-tr{
    background-position: 0px;
}

.walking-ltr{
    animation: walk infinite steps(4);
}
.walking-rtl{
    transform: scaleX(-1);
    animation: walk infinite steps(4);
}

.open-drawerR{
    background-image: url(@/assets/openDrawer.png);
    animation: drawer 1s steps(3) ;
}

@keyframes walk {
    from {background-position: 0px;}
    to {background-position: 800px;}
}
@keyframes drawer {
    from{background-position: 0px;}
    to {background-image: 600px;}
}
@keyframes shock {
    from{background-position: 0px;}
    to{background-position: 800px;}
}
</style>