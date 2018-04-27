<template>
  <div>
  <label for="checkorder">Редактирование заказа</label>
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


</style>
