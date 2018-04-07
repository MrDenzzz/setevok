<template>
    <div>
        <form class="madeOrder">
        <div class="date">
            <label for="p">Дата проверки</label><p>{{today}}</p> <p>{{$route.params.date}}</p>
        </div>
        <div class="date">
            <label for="p">Исполнитель</label><p>{{$route.params.name}}</p>
        </div>
        <div class="date">
            <label for="p">Город</label><p>{{$route.params.city}}</p>
        </div>
        <div class="date">
            <label for="p">Кинотеатр</label><p><select  v-model="newOrder.cinema" name="cinema" required> 
                                            <option selected disabled>Выберите кинотеатр</option>
                                            <option >111111111</option>
                                            <option >11111111</option>
                                        </select></p>
        </div>
        <div class="date">
            <label for="p">Вид проверки</label>
                <p>Реклама<input v-model="newOrder.kind" name="kind" value="Реклама" type="radio" required></p>
                <p>Сеансы<input v-model="newOrder.kind" name="kind" value="Сеансы" type="radio" required></p>
        </div>
        <div class="date">
            <label for="p">Тип проверки</label>
                <p>Скрытая<input v-model="newOrder.type" name="type" value="1" type="radio" required></p>
                <p>Открытая<input v-model="newOrder.type" name="type" value="2" type="radio" required></p>
        </div>
        <button @click="madeOrder(newOrder)" type="submit">Создать проверку</button> 
        </form>
    </div>
</template>

<script>
export default {
  name: "made-order",
  data() {
    return {
      newOrder: {
        date: "2012-12-12",
        city: "Волков",
        cinema: "Выберите кинотеатр",
        type: "",
        kind: "",
        typeOrder: ""
      }
    };
  },
  computed: {
    today() {
      var todayDate = new Date();
      return (
        todayDate.getFullYear() +
        "-" +
        this.stableDate(todayDate.getMonth()) +
        "-" +
        this.stableDate(todayDate.getDay())
      );
    },
    customOrder() {
      return this.$store.getters.customOrder;
    }
  },
  methods: {
    stableDate(normalizeDate) {
      if (String(normalizeDate).length === 1) {
        return "0" + normalizeDate;
      }
      return normalizeDate;
    },
    madeOrder(newOrder) {
        console.log(newOrder, 'newOrder');
      if (
        !newOrder.kind ||
        !newOrder.type ||
        newOrder.cinema === "Выберите кинотеатр"
      )
        return false;
      this.$emit("newOrder", newOrder);
      console.log(this);
      return this.$store.state.orders.push(newOrder);
    }
  }
};
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
    transition: 0.3s;
}

.madeOrder:hover {
    background-color: rgba(50, 255, 50, 0.2);
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

select {
    border-radius: 5px;
    background-color: #506371;
    border: none;
    color: white;
}

button {
    border-radius: 5px;
    background-color: #506371;
    border: dashed 2px black;
    transition: 0.2s;
    font-size: 16pt;
}

button:hover {
    background-color: #405361;
}

button:active {
    background-color: rgba(50, 255, 50, 0.2);
    border-color: white;
}
</style>