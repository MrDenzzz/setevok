<template>
<div class="full-screen">
<div class="style-form">

    <h1>Авторизация</h1>
    <form @submit.prevent="checker(check)">
        <div>
            <label for="login">Email</label>
            <input v-model="login" type="text"  placeholder="Email" required>
        </div>
        <div>
            <label for="password">Пароль</label>
            <input type="password" v-model="password"  placeholder="Пароль" required><!--minlength="8"-->
        </div>
        <p v-if="check">Неверная Почта или Пароль</p>
        <div>
            <span>
                {{users[0].mail}}
            </span>
            <span>
                {{users[0].pass}}
            </span>
            <span>
                {{users[1].mail}}
            </span>
            <span>
                {{users[1].pass}}
            </span>
        </div>
        <div>
            <button type="submit">Войти</button>
        </div>
    </form>
    <div>
        У Вас нет аккаута?
        <router-link to="/registration"><button type="button">Регистрация</button></router-link>
    </div>
</div>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Index",
  components: {
  },
  data() {
    return {
      login: "",
      password: "",
      check: false
    };
  },
  computed: mapGetters({ users: "allUsers" }),
  methods: {
    checker: function(check) {
      for (let i = 0; i < this.users.length; i++) {
        if (
          this.password === this.users[i].pass &&
          this.login === this.users[i].mail
        ) {
          this.check = false;
          localStorage.setItem("userId",this.users[i].userId);
          localStorage.setItem("city",this.users[i].city);
          localStorage.setItem("name",this.users[i].name);
          this.$router.push({
            path:
              this.users[i].path + `/${this.users[i].userId}`,
              params:{
              userId: this.users[i].userId
              }
            //   this.users[i].path
          });
        } else {
          console.log(this.users[i].pass);
          this.check = true;
        }
      }
    },
    madeWorker() {
      console.log(this.zxc);
      return;
      this.newUser.userId++;
      this.users.push(this.newUser);
      this.$router.push({
        path:
          this.newUser.path + `/${this.users[i].userId}`,
        params: {
          id: this.users[i].userId,
        }
      });
    },
    show() {
      this.$modal.show(
        Modalreg,
        {
          text: "This text is passed as a property"
        },
        {
          draggable: true
        }
      );
    }
  }
};
</script>

<style lang="stylus" scoped>

</style>
