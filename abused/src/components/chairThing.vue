<template>
    <div id="chair" class="waking-up" v-if="!props.free"></div>
    <div id="chair" class="out-of-chair" v-if="props.free"></div>
</template>

<script setup>

const props = defineProps({
    free: {
        type: Boolean,
        required: true
    }
})

</script>

<style scoped>
#chair{
    background-image: url(@/assets/childWakeup.png);
    background-position: 0%;
    background-size: cover;
    position: absolute;
    top:54%;
    left:20%;
    height: 16%;
    width: 10%;
}

.waking-up{
    background-image: url(@/assets/childWakeup.png);
    animation: woketh 4s steps 9 forwards;
}

.out-of-chair{
    background-image: url(@/assets/chair.png);
}

@keyframes woketh {
    from{background-position: 0%;}
    to{background-position: 90%;}
}
</style>