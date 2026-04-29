<template>
<div class="map-container" @click="walkTo">
    <div 
      id="child" 
      :class ="action"
      :style="{ top: y + 'px', left: x + 'px' }"
    ></div>
</div>
</template>

<script>

export default {
    data() {
        return {
            x: 600, 
            y: -800,
            action : stand-tr,
        };
    },
    methods: {
        walkTo(event) {
            if(this.x > event.clientX){
                action = walking-ltr
            }else{
                action = walking-rtl
            }
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
};

</script>

<style scoped>
.chair{
    background-image: url(@/assets/childWakeup.png);
    position: absolute;
    height: 800px;
    width: 500px;
}

#child{
    background-image: url(@/assets/childWalk.png);
    background-size: cover;
    position: absolute;
    height: 800px;
    width: 500px;
}

.stand-tl{
    transform: scaleX(-1);
    background-position: 0px;
}
.stand-tr{
    background-position: 0px;
}

.walking-ltr{
    animation: walk 0.6s steps(4);
}
.walking-rtl{
    transform: scaleX(-1);
    animation: walk 0.6s steps(4);
}

.open-drawerR{
    background-image: url(@/assets/openDrawer.png);
    animation: drawer 1s steps(3) ;
}

@keyframes walk {
    from {background-position: 0px;}
    to {background-position: 1500px;}
}
@keyframes drawer {
    from{background-position: 0px;}
    to {background-image: 1000px;}
}
@keyframes shock {
    from{background-position: 0px;}
    to{background-position: 1500px;}
}
</style>