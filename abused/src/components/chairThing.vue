<template>
    <div id="chair" class="waking-up" v-if="props.doneCutscene"></div>
    <div id="chair" class="out-of-chair" v-if="props.free"></div>
</template>

<script setup>

const props = defineProps({
    free: Boolean,
    doneCutscene: Boolean
})

</script>

<style scoped>
#chair{
    background-image: url(@/assets/childWakeup.png);
    background-position: 0px;
    background-size: cover;
    position: absolute;
    top:400px;
    left:20px;
    height: 400px;
    width: 250px;
}

.waking-up{
    background-image: url(@/assets/childWakeup.png);
    animation: woketh 4s steps 9 forwards;
}

.out-of-chair{
    background-image: url(@/assets/chair.png);
}

@keyframes woketh {
    from{background-position: 0px;}
    to{background-position: 3600px;}
}
</style>