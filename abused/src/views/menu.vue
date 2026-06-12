<template>
    <div class="title">Escape The House</div>
    <div class="t"> Written by Stella Chan</div>
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
.t{
    font-family: 'Courier New', Courier, monospace;
    padding-left: 5%;
    font-size: 300%;
}
.start-button{
    position: absolute;
    top:60%;
    left: 10%;
}
</style>