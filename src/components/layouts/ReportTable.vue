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
button{
    width 100%
    height 100%
    border-radius: 5px;
    background-color: #506371;
    border: dashed 2px rgba(0,0,0,.4);
    transition: 0.2s;
    font-size: 16pt;
    color white
}
.madeReport:hover
    transition .5s
    background: rgba(50, 255, 50, 0.2)

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
