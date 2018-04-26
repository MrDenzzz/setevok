<template>
        <!-- <form class="madeReport"> -->
        <div class="madeReport">
        <div class="date">
            <label for="p">Дата конца проверки</label>
            <p>{{report.date}}</p>
        </div>
        <div class="date">
            <label for="p">Город</label>
            <p>{{report.city}}</p>
        </div>
        <div class="date">
            <label for="p">Кинотеатр</label>
            <p>{{report.cinema}}</p>
        </div>
        <div class="date">
            <label for="p">Исполнитель</label>
            <p>{{report.name}}</p>
        </div>
        <div class="date">
            <label for="p">Вид проверки</label>
            <p>{{report.kind}}</p>
        </div>
        <div class="date">
            <label for="p">Тип проверки</label>
            <p>{{report.type}}</p>
        </div>
        <div class="date">
            <button @click="changeReport(report.id)" type="submit">Обновить отчет</button>
        </div>
        </div>
        <!-- </form> -->
</template>

<script>
export default {
  name: "report",
  props: {
    report: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeReport: function(id) {
      console.log(id);
      if (this.report.kind === "Реклама") {
        this.$router.push({
          path: (this.report.path = "/reclamereport" + `/${id}`),
          params: {
            id: this.report.id
          }
        });
      } else {
        this.$router.push({
          path: (this.report.path = "/cinemareport" + `/${id}`),
          params: {
            id: this.report.id
          }
        });
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

.date {
    // display flex
    // justify-content center
    // flex-direction column
    // align-items center
    padding: 10px;
}

button {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #506371;
    border: dashed 2px rgba(0, 0, 0, 0.4);
    transition: 0.2s;
    font-size: 16pt;
    color: white;
}

.madeReport:hover {
    transition: 0.5s;
    background: rgba(50, 255, 50, 0.2);
}

button:hover {
    background-color: #405361;
}

button:active {
    background-color: rgba(50, 255, 50, 0.2);
    border-color: white;
}

.date {
    padding: 7px;
}
</style>
