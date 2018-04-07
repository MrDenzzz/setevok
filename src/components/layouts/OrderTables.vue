<template>
    <div>
        <order 
            class="madeOrder"
            v-for="item in orders"
            :key="item.id" 
            :order="item"/>
    </div>
</template>
<script>
import Order from "./Order";
import { mapGetters } from 'vuex';

export default {
  components: {
    Order
  },
  methods: {

  },
  computed: mapGetters({orders: "allOrders", OrderDates: "OrderDates"})
  }
</script>
<style lang="stylus" scoped>
.madeOrder {
    background: linear-gradient(to top, #506371, #405361);
    border: inset 1px #405361;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

@media (max-width: 800px) {
    .madeOrder {
        flex-direction: column;
        align-self: center;
    }
}

.date {
    // display flex
    // justify-content center
    // flex-direction column
    // align-items center
    padding: 10px;
}
</style>
