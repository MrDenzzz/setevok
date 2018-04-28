<template>
  <div>
    <div class="redactOrder">
  <label class="red-label" for="checkorder"><p>Редактирование заказа</p><p>Новые проверки</p></label>
    </div>
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
        <p>54</p>
      </a>
    </li>
  </ul>
  </div>
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

  input[type="text"]
    border none
    outline-color rgba(255, 255, 255, 0)
  ul
    display flex
    flex-direction column
    justify-content space-around
    padding-left 0px

  li
    background-color rgba(0, 0, 0, 0.06)
    margin 10px
    flex-direction row
    border-radius 15px
    transition .3s
  li:hover
    background-color rgba(0, 0, 0, 0.08)
    transition .3s

  a
    display flex
    flex-direction row
    justify-content space-around
  .red-label
    display flex
    flex-direction row
    justify-content space-between


</style>
