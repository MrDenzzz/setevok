<template>
<div class="modal-form style-form">
    <h1>Регистрация</h1>
<!-- @submit.prevent="show('Modalmail');hide('Modalreg')" -->
     <!--<form >-->

        <input type="text"  placeholder="Имя" minlength="3" v-model="newUser.name" required>

        <input type="mail" placeholder="Email" minlength="8" v-model="newUser.mail" required>

        <input type="text" placeholder="Город в котором Вы будете проверять" v-model="newUser.city" required>

        <input type="password"  minlength="8" placeholder="Пароль не менее 8 символов" v-model="newUser.pass" required>

        <input @blur="this.focused = false" type="password" placeholder="Повторите пароль" v-model="pass2" required>
        <p>{{pass2}}
            {{newUser.pass}}</p>
        <p v-if="!((newUser.pass === pass2) === this.focused)">Пароль не совпадает</p>


       <router-link @click="madeWorker()" tag="button" to="/worker/:userId" type="submit">Подтвердить</router-link>
       <!--<button @click="madeWorker()">Проверить создан ли пользователь</button>-->
     <!--</form>-->
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
            this.$router.push({
              path:
              this.users[i].path + `/${this.newUser.userId}`,
              params:{
                userId: this.newUser.userId
              }
            });
          })
          .catch(() => {
            console.log("Error Report data request");
          });
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

</style>
