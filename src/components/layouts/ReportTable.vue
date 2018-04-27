<template>
    <div class="madeReport">
        <div class="date">
            <label for="p">Дата конца проверки</label>
            <p>{{Report.date}}</p>
        </div>
        <div class="date">
            <label for="p">Город</label>
            <p>{{$route.params.city}}</p>
        </div>
        <div class="date">
            <label for="p">Кинотеатр</label>
            <p>{{Report.cinema}}</p>
        </div>
        <div class="date">
            <label for="p">Исполнитель</label>
            <p>{{Report.name}}</p>
        </div>
        <div class="date">
            <label for="p">Вид проверки</label>
            <p>{{Report.kind}}</p>
        </div>
        <div class="date">
            <label for="p">Тип проверки</label>
            <p>{{Report.type}}</p>
        </div>
        <router-link to="/reclameReport"><button type="submit">Обновить отчет</button></router-link>
    </div>
</template>

<script>
export default {
  name: "Report",
  props: {
      Report: {
        type: Object,
        required: true
      }
  }
};
</script>

<style lang="stylus" scoped>

</style>
