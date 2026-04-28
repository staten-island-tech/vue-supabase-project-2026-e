<template>
    <div class="child"></div>
</template>

<script>

</script>

<style scoped>
.chair{
    background-image: url(@/assets/childWakeup.png);
    position: absolute;
    height: 20vw;
    width: 20vw;
}

.child{
    background-image: url(@/assets/childWalk.png);
    position: absolute;
    height: 20vw;
    width: 20vw;
}

.walking-ltr{
    animation: walk 0.6s steps(4) infinite;
}
.walking-rtl{
    transform: scaleX(-1);
    animation: walk 0.6s steps(4) infinite;
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