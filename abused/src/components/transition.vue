<template>
    <div v-if="visible">

    </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(true)
const timer = ref(null)

onMounted(() => {
  timer.value = setTimeout(() => {
    visible.value = false;
  }, 2000);
});

</script>

<style scoped>
div{
    height: 100vh;
    width:100vw;
    animation: t 2s ease-in;
}

@keyframes t {
    from{background-color: #000000;}
    to{background-color: #00000000;}
}
</style>