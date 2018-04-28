<template>
    <div>
      <h2>Администратор {{ name }}
        <router-link to="/">
          <button class="exit">Выход</button>
        </router-link></h2>
      <div class="orderBlocks">
        <div>
        <createorder class="form"></createorder>
          <userslist class="form"></userslist>
        </div>
        <div>
          <checkorder class="form"></checkorder>
          <distribution class="form"></distribution>
        </div>
      </div>
    </div>
</template>

<script>
  import createorder from './layouts/CreateOrder';
  import checkorder from './layouts/CheckOrder';
  import userslist from './layouts/UsersList';
  import distribution from './layouts/Distribution';
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
      checkorder,
      userslist,
      distribution
    },
  }
</script>

<style lang="stylus" scoped>
.form
  width 45vw
  height 45vh
  margin 1vw
  overflow-x auto
.orderBlocks
  display flex
  flex-direction row


</style>
