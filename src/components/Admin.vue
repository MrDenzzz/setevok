<template>
    <div>
      <h2>Администратор {{ name }}
        <router-link to="/">
          <button class="exit">Выход</button>
        </router-link></h2>
      <div class="orderBlocks">
        <div class="size-2">
        <createorder class="form"></createorder>
          <userslist class="form"></userslist>
        </div>
        <div class="size-2">
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
  min-width 300px


.orderBlocks
  display flex
  flex-direction row
@media screen and (max-width:700px) {
  .orderBlocks {
      display flex
      flex-direction column
      width 100%
    }
  .form{
    width 100vw
    max-width: 85%;
  }
  .size-2{
    width 100vw
  }
  }









</style>
