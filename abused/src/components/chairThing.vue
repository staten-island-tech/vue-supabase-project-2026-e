<template>
    <div id="interactable" class="waking-up" v-if="!props.free"></div>
    <div class="out-of-chair" v-if="props.free"></div>
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
div{
    background-image: url(@/assets/childWakeup.png);
    background-position: 0%;
    background-size: cover;
    position: absolute;
    top:40%;
    left:30%;
    height: 32%;
    width: 10%;
}

#interactable:hover{
    background-color: #ffffff44;
}

.waking-up{
    background-image: url(@/assets/childWakeup.png);
    animation: woketh 4s steps 9 forwards;
}

.out-of-chair{
    background-image: url(@/assets/chair.png);
}

@keyframes woketh {
    from{background-position: 0%;
        width: 20%;}
    to{background-position: 180%;
        width: 20%;}
}
</style>