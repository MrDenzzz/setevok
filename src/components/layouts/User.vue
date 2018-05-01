<template>
  <div class="user">
    <div>
      <div class="form">
        <label for="" class="red-label">Отчеты исполнителя</label>
        <ul>
          <li v-for="(report, index) in reports"
              :key = index
              :report="report">
            <a :report="report" @click="selectedReport = report" >
              <p>
                {{ report.date }}
              </p>
              <p>
                {{ report.city}}
              </p>
              <p>
                {{ report.cinema}}
              </p>
              <p>
                {{ report.film }}
              </p>
              <p>
                {{ report.type}}
              </p>
              <p>
                {{ report.kind}}
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div class="form">
        <label>{{ user.name }}</label>
        <ul>
          <li class="info"><p>Город: </p> <p>{{ user.city }}</p></li>
          <li class="info"><p>Почта: </p> <p>{{ user.mail }}</p></li>
          <li class="info"><p>Должность: </p> <p>{{ user.part }}</p></li>
        </ul>
        <button>Изменить</button>
        <button>Удалить</button>


        <textarea placeholder="текст сообщения" name="" id="" cols="30" rows="10"></textarea>
        <button>Отправить сообщение</button>
      </div>
    </div>
    <div class="form userReport">
      <label for="p" class="reg-label"><p>Выбранный отчет</p></label>
      <!--<pre v-if="selectedReport !== null">{{selectedReport}}</pre>-->
      <ul v-if="selectedReport !== null">
        <ul v-if="selectedReport.kind !== 'Реклама'">
        <li><p>Дата: </p><p>{{selectedReport.date}}</p></li>
        <li v-if="selectedReport.city !== '0'">Город: {{selectedReport.city}}</li>
        <li v-if="selectedReport.cinema !== '0'">Кинотеатр: {{selectedReport.cinema}}</li>
        <li v-if="selectedReport.film !== '0'">Фильм: {{selectedReport.film}}</li>
        <li v-if="selectedReport.people !== '0'"><p>Кол-во людей: </p><p>{{selectedReport.people}}</p></li>
        <li v-if="selectedReport.cost !== '0'"><p>Стоимость: </p><p>{{selectedReport.cost}}</p></li>
        <li v-if="selectedReport.hall !== '0'">Зал: {{selectedReport.hall}}</li>
        <li v-if="selectedReport.row !== '0'">Ряд: {{selectedReport.row}}</li>
        <li v-if="selectedReport.seat !== '0'">Место: {{selectedReport.seat}}</li>
        <li v-if="selectedReport.pictures !== []">Фото: {{selectedReport.pictures}}</li>
        </ul>
        <ul v-else>
          <li v-if="selectedReport.date  !== '0'"><p>Дата: </p><p>{{selectedReport.date}}</p></li>
          <li v-if="selectedReport.city !== '0'">Город: {{selectedReport.city}}</li>
          <li v-if="selectedReport.cinema !== '0'">Кинотеатр: {{selectedReport.cinema}}</li>
          <li v-if="selectedReport.film !== '0'">Фильм: {{selectedReport.film}}</li>
          <li v-if="selectedReport.poster !== '0'">Постеры:
            <div>
              {{selectedReport.poster[0]}}
              <input class="option-input radio" v-if="selectedReport.poster !== '0'" type="checkbox" disabled  :checked="selectedReport.poster[1]">
            </div>
          </li>
          <li v-if="selectedReport.siti !== '0'">Сити:
            <div>
              {{selectedReport.siti[0]}}
              <input class="option-input radio" v-if="selectedReport.siti !== '0'" type="checkbox" disabled  :checked="selectedReport.siti[1]">
            </div>
          </li>
          <li v-if="selectedReport.hard !== '0'">Хард-постеры:
            <div>
              {{selectedReport.hard[0]}}
              <input class="option-input radio" v-if="selectedReport.hard !== '0'" type="checkbox" disabled :checked="selectedReport.hard[1]">
            </div>
          </li>
          <li v-if="selectedReport.stand !== '0'">Стенди:
            <div>
              {{selectedReport.stand[0]}}
              <input class="option-input radio" v-if="selectedReport.stand !== '0'" type="checkbox" disabled  :checked="selectedReport.stand[1]">
            </div>
          </li>
          <li v-if="selectedReport.pictures !== '[]'">Фото: {{selectedReport.pictures}}</li>
      </ul>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
        name: "User",
    data() {
      return {
        id: this.$route.params.userId,
        selectedReport: null
      }
    },
    computed: {
      ...mapGetters(["allUsers", "reports"]),
      user: function () {
        let result = this.allUsers.find(item => {
            return item.userId == this.id;
        })
        return result;
      },
    },
    methods: {
      changeReport: function (id) {
        console.log(id);
        // this.$emit('report', this.report);
        if (this.reports.kind === "Реклама") {
          this.$router.push({
            path: (this.reports.path = "/reclamereport" + `/${id}`),
            params: {
              id: this.reports.id
            }
          });
        } else {
          this.$router.push({
            path: (this.reports.path = "/cinemareport" + `/${id}`),
            params: {
              id: this.reports.id
            }
          });
        }
      },
    },
    created () {
      console.log(this)
    }
  }
</script>

<style lang="stylus" scoped>
  textarea
    margin-top 15px
    width 100%
  .form
    width 30vw
    min-width 400px
    height 45vh
    margin 1vw
    overflow-x auto
  input[type="text"]
    border none
    outline-color rgba(255, 255, 255, 0)
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
    justify-content space-around
    display flex
  li:hover
    background-color rgba(0, 0, 0, 0.08)
    transition .3s
  a, .info
    display flex
    flex-direction row
    justify-content space-around
  .red-label
    display flex
    flex-direction row
    justify-content space-between
  .userReport
    width 40vw
    height 96vh
  .user
    display flex
    flex-direction row
    flex-wrap wrap
    width 100vw
</style>
