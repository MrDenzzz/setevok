<template>
  <div class="user">
    <div>
      <div class="form">
        <label for="" class="red-label">Заказы исполнителя</label>
        <ul>
          <li v-for="report in reports"
              :key = report.userId
              :report="report">
            <a :report="report" @click="changeReport(report.userId)" >

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
        <!--<label>{{ user.name }}</label>-->
        <!--<p>{{ user.city }}</p>-->
        <!--<p>{{ user.mail }}</p>-->
        <!--<p>{{ user.path }}</p>-->
        Не отображается инфа по пользователю
        <button>Изменить</button>
        <button>Удалить</button>


        <textarea placeholder="текст сообщения" name="" id="" cols="30" rows="10"></textarea>
        <button>Отправить сообщение</button>
      </div>
    </div>
    <div class="form userReport">
      <label for="p" class="reg-label"><p>Выбранный отчет</p></label>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
        name: "User",
    data() {
      return {
        id: this.$route.params.id
      }
    },
    computed: {
      ...mapGetters(["allUsers", "reports"]),
      // user: this.users.filter(function (userId) {
      //       console.log(userId, "1");
      //       console.log(this.id, "2");
      //       return userId === this.id;
      //   }),
    },
    methods: {
      changeReport: function (id) {
        console.log(id);
        // this.$emit('report', this.report);
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
      },
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
