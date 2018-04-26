<template>
    <div>
        <!-- <form class="madeReport"> -->
        <div class="madeReport">
        <div class="date">
            <label for="p">Дата проверки</label><p>{{today}}</p> <p>{{newReport.date}}</p>
        </div>
        <div class="date">
            <label for="p">Исполнитель</label><p>{{name}}</p>
        </div>
        <div class="date">
            <label for="p">Город</label><p>{{city}}</p>
        </div>
        <div class="date">
            <label for="p">Кинотеатр</label><p><select  v-model="newReport.cinema" name="cinema" required>
                                            <option selected disabled>Выберите кинотеатр</option>
                                            <option >111111111</option>
                                            <option >11111111</option>
                                        </select></p>
        </div>
        <div class="date">
            <label for="p">Вид проверки</label>
                <p>Реклама<input v-model="newReport.kind" name="kind" value="Реклама" type="radio" required></p>
                <p>Сеансы<input v-model="newReport.kind" name="kind" value="Сеансы" type="radio" required></p>
        </div>
        <div class="date">
            <label for="p">Тип проверки</label>
                <p>Скрытая<input v-model="newReport.type" name="type" value="Скрытая" type="radio" required></p>
                <p>Открытая<input v-model="newReport.type" name="type" value="Открытая" type="radio" required></p>
        </div>
        <button @click="madeReport(newReport)">Создать проверку</button>
        <!-- </form> -->
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "made-Report",
  data() {
    return {
      name: localStorage.getItem("name"),
      city: localStorage.getItem("city"),

      newReport: {
        id: this.$parent.idReport,
        date: "2014-23-02",
        city: this.$parent.name,
        cinema: "Выберите кинотеатр",
        kind: "",
        type: "",
        name: this.$parent.name,

        siti: [],
        hard: [],
        poster: [],
        flaers: [],
        stand: [],

        time: "",
        sessions: "",
        people: "",
        cost: "",
        hall: "",
        row: "",
        seat: "",

        pictures: [],
        filled: false
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
    ...mapGetters(["reports"])
  },
  methods: {
    stableDate(normalizeDate) {
      if (String(normalizeDate).length === 1) {
        return "0" + normalizeDate;
      }
      return normalizeDate;
    },
    madeReport(newReport) {
      if (
        !newReport.kind ||
        !newReport.type ||
        newReport.cinema === "Выберите кинотеатр"
      ) {
        return false;
      } else {
        console.log(this.newReport, "djn")
        this.$emit("newReport", this.newReport);
        this.$store
          .dispatch("madeNewReport", this.newReport)
          .then(() => {
            console.log("Success Report data request");
          })
          .catch(() => {
            console.log("Error Report data request");
          });
        return;
        return console.log(this.reports);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.madeReport {
    background: linear-gradient(to top, #506371, #405361);
    border: inset 1px #405361;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    transition: 0.3s;
}

.madeReport:hover {
    background-color: rgba(50, 255, 50, 0.2);
}

@media (max-width: 800px) {
    .madeReport {
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
