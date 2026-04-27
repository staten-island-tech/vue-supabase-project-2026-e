<template>
    <div class="room">
    </div>
    
</template>

<script>

</script>

<style scoped>
.chair{
    background-image: url();
    position: absolute;
    height: 20vw;
    width: 20vw;
}

.child{
    background-image: url();
    position: absolute;
    height: 20vw;
    width: 20vw;
}

.walking-ltr{
    animation: walk 1s steps(4) infinite;
}
.walking-rtl{
    transform: scaleX(-1);
    animation: walk 1s steps(4) infinite;
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