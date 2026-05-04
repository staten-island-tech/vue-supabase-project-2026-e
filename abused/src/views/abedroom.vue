<template>
<div id="child"></div>
</template>

<script>

</script>

<style scoped>
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
    to {background-position: 600px;}
}
@keyframes drawer {
    from{background-position: 0px;}
    to {background-image: 400px;}
}
@keyframes shock {
    from{background-position: 0px;}
    to{background-position: 600px;}
}
</style>