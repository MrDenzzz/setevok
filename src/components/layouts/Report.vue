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
            <label for="p">Кинотеатр</label>
            <p>{{report.film}}</p>
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

</style>
