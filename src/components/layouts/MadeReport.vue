<template>
    <div>
        <!-- <form class="madeReport"> -->
        <div class="form madeReport">
          <div class="size-3">
        <div class="date">
            <label for="p">Дата проверки</label><p>{{today}}</p> <p>{{newReport.date}}</p>
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
          </div>
          <div class="size-3">
          <div class="date">
            <label for="p">Фильм</label><p><select  v-model="newReport.film" name="cinema" required>
            <option selected disabled>Выберите фильм</option>
            <option >dobby2</option>
            <option >dobby</option>
          </select></p>
          </div>
            <div class="date">
            <label for="p">Вид проверки</label>
                <p>Реклама
                  <input class="option-input radio" v-model="newReport.kind" name="kind" value="Реклама" type="radio" required></p>
                <p>Сеансы
                  <input class="option-input radio" v-model="newReport.kind" name="kind" value="Сеансы" type="radio" required></p>
        </div>
        <div class="date">
            <label for="p">Тип проверки</label>
                <p class="checkbox-label">Скрытая
                  <input class="option-input radio" v-model="newReport.type" name="type" value="Скрытая" type="radio" required></p>
                <p>Открытая
                  <input class="option-input radio" v-model="newReport.type" name="type" value="Открытая" type="radio" required></p>

        </div>
            <button @click="madeReport(newReport)">Создать проверку</button>
            </div>
        </div>
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
        film:"Выберите фильм",
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
.size-3
  display flex
  flex-direction row
  width 100%
  justify-content space-around
@media screen and (max-width: 765px){
  .size-3 {
    flex-direction: column
  }
}

.form
  width auto
.madeReport
  display flex
  justify-content space-between
  flex-direction row
input
  width auto
input[type=radio] {
    background-color rgba(0, 0, 0, 0.15)
    border-color rgba(0, 0, 0, 0.15)
  }
.option-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  top: 13.33333px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 20px;
  width: 20px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;
}
.option-input:hover {
  background: #9faab7;
}
.option-input:checked {
  background: #40e0d0;
}
.option-input:checked::before {
  height: 10px;
  width: 10px;
  position: absolute;
  content: '✔';
  display: inline-block;
  font-size: 25px;
  text-align: center;
  line-height: 20px;
}
.option-input:checked::after {
  -webkit-animation: click-wave 0.65s;
  -moz-animation: click-wave 0.65s;
  animation: click-wave 0.65s;
  background: #40e0d0;
  content: '';
  display: block;
  position: relative;
  z-index: 100;
}
.option-input.radio {
  border-radius: 50%;
}
.option-input.radio::after {
  border-radius: 50%;
}
select
  text-decoration none
  border none
  outline-color rgba(255, 255, 255, 0)
  background-color white
  appearance: none;
  cursor: pointer;





</style>
