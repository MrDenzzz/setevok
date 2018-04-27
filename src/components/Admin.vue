<template>
    <div>
      <h2>Администратор {{ name }}
        <router-link to="/">
          <button class="exit">Выход</button>
        </router-link></h2>
      <createorder class="orderBlock"></createorder>
      <checkorder class="orderBlock"></checkorder>
    </div>
</template>

<script>
  import createorder from './layouts/CreateOrder';
  import checkorder from './layouts/CheckOrder';
  import { mapGetters } from "vuex";

  export default {
    name:"Admin",
    data() {
      return {
        name: localStorage.getItem("name"),
      }
    },
    components: {
      createorder,
      checkorder
    },
  }
</script>

<style lang="stylus" scoped>
  .orderBlock{
    width 50%
  }
  .exit {
    background-color: rgba(50, 255, 50, 0.2);
    color: white;
    border-color: white;
  }


</style>
