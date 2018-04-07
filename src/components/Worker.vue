<template>
    <div class="full-screen">
        <div class="style-form">
            <h2>Исполнитель {{$route.params.name}} <router-link to="/"><button @click="$route.params.path" class="exit">Выход</button></router-link></h2>
            <div class="madeOrder">
                <made-order :orders="newOrder" />
            </div>
            <div class="orders">
                <orders :new-order="orders"></orders>
            </div>
        </div>
    </div>
</template>

<script>
import MadeOrder from "./layouts/MadeOrder";
import Orders from "./layouts/Orders";
import { mapGetters } from "vuex";

export default {
  name: "Worker",
  components: {
    MadeOrder,
    Orders
  },
  data() {
    return {
      newOrder: {}
    };
  },
  computed: {
    ...mapGetters(["orders"])
  },
  methods: {
    viewDetails(order) {
      this.selectedOrder = order;
    }
  },
};
</script>

<style lang="stylus">
body {
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: #506371;
    overflow-y: auto;
    overflow-x: hidden;
}

.style-form {
    padding: 30px;
    position: relative;
    font-family: 'Raleway', 'Lato', Arial, sans-serif;
    color: white;
    text-shadow: 0 3px 1px rgba(0, 0, 0, 0.5);
}

.orders {
    margin: 30px;
}

.exit {
    background-color: rgba(50, 255, 50, 0.2);
    color: white;
    border-color: white;
}

h2 {
    display: flex;
    justify-content: space-between;
}
</style>