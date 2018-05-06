<template>
        <!-- <form class="madeReport"> -->
        <div class="form report">
         <div class="size-4">
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
            <label for="p">Фильм</label>
            <p>{{report.film}}</p>
          </div>
         </div>
          <div class="size-4">
          <!--<div class="date">-->
            <!--<label for="p">Исполнитель</label>-->
            <!--<p>{{report.name}}</p>-->
        <!--</div>-->
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
.form
  width auto
  box-shadow none
.report
  display flex
  justify-content space-between
  flex-direction row
  background-color rgba(0, 0, 0, 0.06)
  margin 10px
.size-4
  display flex
  flex-direction row
  width 100%
  justify-content space-around
@media screen and (max-width: 765px){
  .size-4 {
    flex-direction: column
  }
}


</style>
