<template>
    <div id="child"></div>
</template>

<script>
  
</script>

<style scoped>
#child{
    background-image: url(@/assets/stellaidea.png);
    background-size: cover;
    background-position: 0%;
    position: absolute;
    height: 16%;
    width: 10%;
    top: 54%;
    animation: panik 2s steps(5) forwards;
}
@keyframes panik {
    0%{background-position: 0%;}
    20%{background-position: 10%;}
    30%{background-position: 20%;}
    40%{background-position: 30%;}
    50%{background-position: 40%;}
    60%{background-position: 30%;}
    100%{background-position: 30%;}
}
</style>