<template>
  <div>
    <form @submit.prevent="madeOrder(newOrder)" class="madeOrder">
      <input v-model="newOrder.film" type="text" placeholder="Название заказа">
      <div>
        <label for="p">Вид проверки</label>
        <p>Реклама<input v-model="newOrder.kind" name="kind" value="Реклама" type="radio" required></p>
        <p>Сеансы<input v-model="newOrder.kind" name="kind" value="Сеансы" type="radio" required></p>
      </div>
      <div>
        <label for="p">Тип проверки</label>
        <p>Скрытая<input v-model="newOrder.type" name="type" value="Скрытая" type="radio" required></p>
        <p>Открытая<input v-model="newOrder.type" name="type" value="Открытая" type="radio" required></p>
      </div>
      <button type="submit" >Создать заказ</button>
    </form>
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
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';


  export default {
    name: "CreateTable",
    components: {

    },
    data() {
      return {
        name: localStorage.getItem("name"),
        newOrder:{
          id: 3,
          film: '',
          type: '',
          kind: ''
        }
      };
    },
    computed: {
      ...mapGetters(["orders"]),
    },
    methods: {
      madeOrder(newOrder) {
        if (
          !newOrder.kind ||
          !newOrder.type ||
          !newOrder.film
        ) {
          return false;
        } else {
          console.log(this.newOrder, "djn")
          this.$emit("newOrder", this.newOrder);
          this.$store
            .dispatch("madeNewOrder", this.newOrder)
            .then(() => {
              console.log("Success Order data request");
            })
            .catch(() => {
              console.log("Error Order data request");
            });
          return;
        }
      },
      getOrderTable(id){
        this.$router.push({
          path:  "/order" + `/${id}`,
          params: {
            id: id
          }
        });
      }
    },
  };
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
  .madeOrder
    display flex
    justify-content space-between
    text-align center
    width 33vw
    min-width 600px
</style>
