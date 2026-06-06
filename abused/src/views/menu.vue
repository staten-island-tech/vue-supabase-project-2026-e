<template>
    <Suspense>
        <Login class="start-button"/>
    </Suspense>

</template>

<script setup>
import Login from '@/components/login.vue';


</script>

<style scoped>
.start-button{
    position: absolute;
    top:30vh;
    left: 40vw;
}
</style>