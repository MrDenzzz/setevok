<template>
  <div class="screen">
  <div class="form">
    <div>
    <h1 class="title">Авторизация</h1>
    <form @submit.prevent="checker(check)">
        <div class="input">
            <label for="login">Email</label>
            <input v-model="login" type="text"  placeholder="Введите Email" required>
        </div>
        <div class="input">
            <label for="password">Пароль</label>
            <input type="password" v-model="password"  placeholder="Введите Пароль" required><!--minlength="8"-->
        </div>
        <p v-if="check">Неверная Почта или Пароль</p>
        <div>
            <span>
                {{users[0].mail}}
            </span><br>
            <span>
                {{users[0].pass}}
            </span><br>
            <span><br>
                {{users[1].mail}}
            </span><br>
            <span>
                {{users[1].pass}}
            </span><br>
        </div>
        <div class="login">
            <button  type="submit">Войти</button>
        </div>
    </form>
    <div class="reg-block">
        <router-link class="reg-link" to="/registration">У вас нет аккаунта? Регистрация </router-link>
    </div>
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


  .input
    display flex
    justify-content space-between
    margin  10px 0 10px 10px
    border rgba(0, 0, 0, 0.23) solid 1px
    border-radius 5px
  label
    margin 10px
    width 15%
  input
    margin-left 10px
    border none
    outline-color rgba(255, 255, 255, 0)
    width 100%
  input:focus
    outline-color none
  .login
    display flex
    justify-content center
  .reg-b
    width 100%
    display flex
    justify-content flex-end
  .reg-block
    width: 100%
    display flex
    justify-content flex-end
    margin-top 5px
  .reg-link
    text-decoration none
    border none
    color rgba(0,0,0,0.71)
  .login
    justify-content flex-end


</style>
