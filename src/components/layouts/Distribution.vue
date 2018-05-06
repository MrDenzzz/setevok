<template>
    <div>
      <label for="div">Рассылка заданий</label>
      <div class="filters">
        <select class="filter" name="" id="orders">
          <option v-for="order in orders" :orders="orders" :value="order.film">{{order.film}}</option>
        </select>
        <select class="filter" name="" id="cities">
          <option v-for="city in cities" :cities="cities" :value="city.city">{{city.city}}</option>
        </select>
      </div>
      <textarea placeholder="текст сообщения" name="" id="" cols="30" rows="10"></textarea>
      <div class="dist-button">
        <button>Добавить документ</button>
        <button>Отправить сообщение</button>
      </div>
    </div>
    </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
        name: "Distribution",
      computed: {
        ...mapGetters(["allUsers","orders","cities"])
      },
    }
</script>

<style lang="stylus" scoped>
  .filters
  display flex
  flex-direction row
  justify-content space-between
  ::-webkit-input-placeholder {
    text-align: center;
  }

  :-moz-placeholder { /* Firefox 18- */
    text-align: center;
  }

  ::-moz-placeholder {  /* Firefox 19+ */
    text-align: center;
  }

  :-ms-input-placeholder {
    text-align: center;
  }
  textarea{
    width 100%
  }
  .dist-button
    display flex
    justify-content space-around

  input
    width 49%
  input[type="text"]
    border none
    outline-color rgba(255, 255, 255, 0)
  .filter
    width 49%
    text-align-last: center;
    text-align: center;
</style>
