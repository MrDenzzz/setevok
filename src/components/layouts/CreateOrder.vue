<template>
  <div>
    <label for="form">Создание заказа</label>
    <form  @submit.prevent="madeOrder(newOrder)" class="madeOrder form">
      <input v-model="newOrder.film" type="text" placeholder="Введите название заказа">
      <div>
        <label for="p">Вид проверки</label>
        <p>Реклама<input class="option-input radio" v-model="newOrder.kind" name="kind" value="Реклама" type="radio" required></p>
        <p>Сеансы<input class="option-input radio" v-model="newOrder.kind" name="kind" value="Сеансы" type="radio" required></p>
      </div>
      <div>
        <label for="p">Тип проверки</label>
        <p>Скрытая<input class="option-input radio" v-model="newOrder.type" name="type" value="Скрытая" type="radio" required></p>
        <p>Открытая<input class="option-input radio" v-model="newOrder.type" name="type" value="Открытая" type="radio" required></p>
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

.madeOrder{
  display flex
  flex-direction row
  justify-content space-between
  width auto
}
input[type="text"]
  border none
  outline-color rgba(255, 255, 255, 0)
  max-width 200px
  width 45%
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

</style>
