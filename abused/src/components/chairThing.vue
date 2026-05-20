<template>
    <div id="chair" :class="mode"></div>
</template>

<script setup>



</script>

<style scoped>
#chair{
    background-image: url(@/assets/childWakeup.png);
    background-size: cover;
    position: absolute;
    height: 320px;
    width: 200px;
}

.waking-up{
    background-image: url(@/assets/childWakeup.png);
    animation: woketh 4s steps 9 forwards;
}

@keyframes woketh {
    from{background-position: 0px;}
    to{background-position: 1800px;}
}
</style>