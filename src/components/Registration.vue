<template>
  <div class="screen">
    <div class="form">
      <h1>Регистрация</h1>
      <!-- @submit.prevent="show('Modalmail');hide('Modalreg')" -->
      <!--<form >-->
      <div class="input">
      <input type="text"  placeholder="Имя" minlength="3"
      v-model="newUser.name" required>
      </div>
      <div class="input">
        <input type="mail" placeholder="Email" minlength="8"
               v-model="newUser.mail" required>
      </div>
      <div class="input">
        <input type="text" placeholder="Город в котором Вы будете проверять"
               v-model="newUser.city" required>
      </div>
      <div class="input">
        <input type="password"  minlength="8" placeholder="Пароль не менее 8 символов"
               v-model="newUser.pass" required>
      </div>
      <div class="input">
        <input @blur="this.focused = false" type="password" placeholder="Повторите пароль"
               v-model="pass2" required>
      </div>
      <p>{{pass2}}
        {{newUser.pass}}</p>
      <p v-if="!((newUser.pass === pass2) === this.focused)">Пароль не совпадает</p>

      <div class="reg-b">
        <router-link to="/">
          <button  class="exit">Назад</button>
        </router-link>
        <!--<router-link  tag="button" to="/worker/:userId" type="submit">Подтвердить</router-link>-->
        <button  @click="madeWorker()" type="submit">Подтвердить</button>
      </div>
      <!--<button @click="madeWorker()">Проверить создан ли пользователь</button>-->
      <!--</form>-->
    </div>
  </div>
</template>

<script>
import Modalmail from "./layouts/Modal-mail";
import { mapGetters } from "vuex";


name: "Registration";
components: {
  Modalmail;
}
export default {
  data() {
    return {
      pass2: "",
      focused: true,

      newUser: {
        userId: 124,
        name: "",
        part: "worker",
        city: "",
        path: "/worker",
        mail: "",
        pass: ""
      }
    };
  },
  // watch: {
  //   "newUser.name": function(val) {
  //     console.log(val, "val");
  //   }
  // },
  computed: mapGetters({ users: "allUsers" }),
  methods: {
    madeWorker() {
      this.newUser.userId++;
      this.$emit("newUser", this.newUser);
        this.$store
          .dispatch("madeNewUser", this.newUser)
          .then(() => {
            console.log("Success Report data request");
          })
          .catch(() => {
            console.log("Error Report data request");
          });
      // this.$router.push({
      //   path:
      //   this.users[i].path + `/${this.newUser.userId}`,
      //   params:{
      //     userId: this.newUser.userId
      //   }
      // });
    },
    // show() {
    //   this.$modal.show(
    //     Modalmail, { newUser: this.newUser},
    //     {
    //       text: "This text is passed as a property"
    //     },
    //     {
    //       draggable: true
    //     }
    //   );
    // },
    // hide() {
    //   this.$modal.hide('Modalmail');
    // }
  }
};
</script>

<style lang="stylus">
  .screen
    width 100vw
    height 100vh
    display flex
    justify-content center
    align-items center
    flex-direction row
  .title
    margin-bottom: 20px
  .form
    box-shadow 0px 0px 30px rgba(128, 128, 128, 0.62)
    padding 20px
    border-radius 15px
    width 30%
    min-width 270px
  .input
    display flex
    justify-content space-between
    margin 10px
    border rgba(0, 0, 0, 0.23) solid 1px
    border-radius 5px
  label
    margin 10px
  input
    border none
    text-decoration rgba(255, 255, 255, 0)
    width 100%
  input:focus
    outline-color none
  .login
    display flex
    justify-content center
  .reg-b
    width 100%
    display flex
    justify-content space-between
</style>
