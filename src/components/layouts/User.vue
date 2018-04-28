<template>
  <div class="user">
    <div>
      <div class="form">
        <label for="" class="red-label">Заказы исполнителя</label>
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
        <p>{{ user.city }}</p>
        <p>{{ user.mail }}</p>
        <p>{{ user.path }}</p>
        Теперь отображается :)
        <button>Изменить</button>
        <button>Удалить</button>


        <textarea placeholder="текст сообщения" name="" id="" cols="30" rows="10"></textarea>
        <button>Отправить сообщение</button>
      </div>
    </div>
    <div class="form userReport">
      <label for="p" class="reg-label"><p>Выбранный отчет</p></label>
      <pre v-if="selectedReport !== null">{{selectedReport}}</pre>
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
  .form
    width 45vw
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
  li:hover
    background-color rgba(0, 0, 0, 0.08)
    transition .3s

  a
    display flex
    flex-direction row
    justify-content space-around
  .red-label
    display flex
    flex-direction row
    justify-content space-between
  .userReport
    width auto
    height 96vh
  .user
    display flex
    flex-direction row
    flex-wrap wrap
    width 100vw
</style>
