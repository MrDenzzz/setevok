<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
button {
    transition: 0.2s;
    background-color: #506371;
    border: dashed 2px black;
    font-size: 16pt;
    
}

button:hover {
    background-color: #405361;
}

button:active {
    background-color: rgba(50, 255, 50, 0.2);
    border-color: white;
}
</style>
