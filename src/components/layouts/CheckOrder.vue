<template>
  <ul>
    <li v-for="order in orders"
        :key = order.orderId
        :order="order">
      <a :order="order" @click="getOrderTable(order.orderId)" >
        <p>
          {{ order.film }}
        </p>
        <p>
          {{ order.type}}
        </p>
        <p>
          {{ order.kind}}
        </p>
      </a>
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "CheckOrder",
    computed: {
      ...mapGetters(["orders"]),
    },
    methods: {
      getOrderTable(id) {
        this.$router.push({
          path: "/order" + `/${id}`,
          params: {
            id: id
          }
        });
      },
    }
  }
</script>

<style lang="stylus" scoped>

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
</style>
