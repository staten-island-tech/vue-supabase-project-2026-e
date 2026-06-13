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
    height: 320px;
    width: 200px;
    top: 45%;
    animation: panik 2s steps(5) forwards;
}
@keyframes panik {
    0%{background-position: 0%;}
    20%{background-position: 200px;}
    30%{background-position: 400px;}
    40%{background-position: 600px;}
    50%{background-position: 800px;}
    60%{background-position: 600px;}
    100%{background-position: 600px;}
}
</style>