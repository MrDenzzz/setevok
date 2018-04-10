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
    computed: {
    ...mapGetters(["orders"]),
        getIdOrder() {
            return localStorage.setItem("id", this.orders.length); 
        }
    },
  }
</script>
<style lang="stylus" scoped>

@media (max-width: 800px) {
    .madeOrder {
        flex-direction: column;
        align-self: center;
    }
}

</style>
