<template>
    <div>
      <h2>Администратор {{ name }}
        <router-link to="/">
          <button class="exit">Выход</button>
        </router-link></h2>
      <div class="orderBlocks">
        <createorder></createorder>
        <checkorder></checkorder>
      </div>
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

</style>
