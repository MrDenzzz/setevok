<template>
    <div>
        <h2>Администратор {{name}}</h2>
            <div class="orders">
                <Orders></Orders>
            </div>
    </div>
</template>

<script>
import Orders from "./layouts/Orders";

export default {
  name: "Admin",
  components: {
    Orders
  },
  data() {
    return {
      name: localStorage.getItem("name")
    };
  }
};
</script>

<style lang="stylus" scoped>
.orders {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
}
</style>