<template>
    <div>
      <h2>Администратор {{ name }}
        <router-link to="/">
          <button  class="exit">Выход</button>
        </router-link></h2>
      <createorder></createorder>
    </div>
</template>

<script>
  import CreateOrder from './layout/CreateOrder';
  import { mapGetters } from "vuex";

  export default {
    name:"Admin",
    components: {
      CreateOrder
    },
  }
</script>

<style lang="stylus" scoped>

  .exit {
    background-color: rgba(50, 255, 50, 0.2);
    color: white;
    border-color: white;
  }
.reports {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
}
  a, li {
    text-decoration none
    list-style-type: none;
    display flex
    flex-direction row
    justify-content space-between
    width 400px
  }
  li{
    background-color darkgray
    border-radius 15px
    margin-top 15px
    transition 1s
  }
  li:hover
    background-color wheat
  p{
    margin-left 10px
    margin-right 10px
    width 100%
    text-align center
    color black
  }
  .madeOrder
    display flex
    justify-content space-between
    text-align center
    width 33vw
    min-width 600px


</style>
