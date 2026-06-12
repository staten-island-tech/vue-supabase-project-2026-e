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
    font-size: 600%;
    padding-left: 5%;
    padding-top: 10%;
    font-family: 'Courier New', Courier, monospace;
}
.start-button{
    position: absolute;
    top:60%;
    left: 10%;
}
</style>