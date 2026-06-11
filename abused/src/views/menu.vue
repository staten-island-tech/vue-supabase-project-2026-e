<template>
    <div class="title">Escape The House</div>
    <Suspense>
        <Login class="start-button"/>
    </Suspense>
</template>

<script setup>
import Login from '@/components/login.vue';


</script>

<style scoped>
.title{
    font-size: 800%;
    padding-left: 5%;
    padding-top: 10%;
    font-family: 'Courier New', Courier, monospace;
}
.start-button{
    position: absolute;
    top:50%;
    left: 10%;
}
</style>