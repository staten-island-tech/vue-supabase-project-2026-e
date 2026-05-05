<template>
    <div class="room" @click="walkTo">
        <div id="child" :class="action" :style="{left: charX + 'px'}"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const action = ref("stand-tr")
const charX = ref(100)

const walkTo = async (event) =>{
    if(charX.value < event.clientX){
        action.value = "walking-ltr"
        setTimeout(()=> {
            action.value = "stand-tr"
        }, 1000)
    } else{
        action.value = "walking-rtl"
        setTimeout(()=> {
            action.value = "stand-tl"
        }, 1000)
    }
    charX.value = event.clientX - 100
}

</script>

<style scoped>
.room{
    width:1000px;
    height: 700px;
    background-color: red;
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
    transform: scaleX(-1);
    background-position: 0px;
}
.stand-tr{
    background-position: 0px;
}

.walking-ltr{
    animation: walk 1s steps(4);
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