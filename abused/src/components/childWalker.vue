<template>
    <div class="space" @click="walkTo" v-if="noAnimation"></div>
    <div id="child" :class="action" :style="{left: charX + 'px', transitionDuration: timeWalk + 's'}"></div>
</template>

<script setup>
import { ref } from 'vue';

const action = ref("stand-tr")
const charX = ref(100)
const timeWalk = ref(0)
const distance = ref(0)
const noAnimation = ref(true)

const walkTo = (event) =>{
    noAnimation.value = false
    if(charX.value < (event.clientX-100)){
        distance.value = event.clientX - charX.value
        timeWalk.value = distance.value/250
        action.value = "walking-ltr"
        setTimeout(()=> {
            action.value = "stand-tr"
            noAnimation.value = true
        }, timeWalk.value*1000)
    } else{
        distance.value = charX.value - event.clientX 
        timeWalk.value = distance.value/250
        action.value = "walking-rtl"
        setTimeout(()=> {
            action.value = "stand-tl"
            noAnimation.value = true
        }, timeWalk.value*1000)
    }
    charX.value = event.clientX - 100
}

</script>

<style scoped>
.space{
    position:absolute;
    width:90%;
    height: 50%;
    cursor: crosshair;
    overflow: hidden;
    top: 30%
}

#child{
    background-image: url(@/assets/childWalk.png);
    background-size: cover;
    position: absolute;
    height: 16%;
    width: 10%;
    top: 54%;
}

.stand-tl{
    background-position: 0px;
    animation: look-left 0s steps(2) forwards;;
}
.stand-tr{
    background-position: 0px;
}

.walking-ltr{
    background-image: url(@/assets/childWalk.png);
    animation: walk 1s infinite steps(4);
}
.walking-rtl{
    background-image: url(@/assets/childWalk.png);
    animation: walk 1s infinite steps(4), look-left 0s steps(2) forwards;
}

.open-drawerR{
    background-image: url(@/assets/openDrawer.png);
    animation: drawer 1s steps(3) ;
}

@keyframes walk {
    from {background-position: 0%;}
    to {background-position: 40%;}
}
@keyframes drawer {
    from{background-position: 0%;}
    to {background-image: 60%;}
}
@keyframes shock {
    from{background-position: 0%;}
    to{background-position: 80%;}
}
@keyframes look-left{
    from{transform: scaleX(1);}
    to{transform: scaleX(-1);}
}
</style>