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
        <button @click="show('Modalreg')" type="button">БИСТРА ПАШЕЛ РИГИСТРИРОВАЦЦА ПАДОНАК!11111</button>
    </div>

            <modals-container name="Modalreg">
        <Modalreg/>
        </modals-container>
</div>
</div>
</template>

<script>
import Modalreg from "./layouts/Modalreg";
import { mapGetters } from "vuex";

export default {
  name: "Index",
  components: {
    Modalreg
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
          this.$router.push({
            path: this.users[i].path + `/${this.users[i].userId}/${this.users[i].city}/${this.users[i].name}`,
            params: {
              userId: this.users[i].userId,
              name: this.users[i].name,
              city: this.users[i].city
            }
          });
        } else {
          console.log(this.users[i].pass);
          this.check = true;
        }
      }
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
span {
    display: flex;
    align-self: column;
}

.style-form {
    width: 390px;
    margin: 120px auto 10px;
    padding: 15px;
    position: relative;
    font-family: 'Raleway', 'Lato', Arial, sans-serif;
    color: white;
    text-shadow: 0 3px 1px rgba(0, 0, 0, 0.5);
}

.style-form h1 {
    font-size: 22px;
    padding-bottom: 15px;
}

.style-form input[type=text], .style-form input[type=password] {
    width: 95%;
    padding: 8px 4px 8px 10px;
    margin-bottom: 15px;
    border: 1px solid #4e3043;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    -webkit-transition: all 0.7s linear;
    -moz-transition: all 0.7s linear;
    -ms-transition: all 0.7s linear;
    -o-transition: all 0.7s linear;
    transition: all 0.7s linear;
    /* Font styles */
    font-family: 'Raleway', 'Lato', Arial, sans-serif;
    color: #fff;
    font-size: 13px;
}

.style-form input[type=text]:hover, .style-form input[type=password]:hover {
    border-color: #435664;
    box-shadow: inset 123px 108px -198px #435664;
    transition: all 0.4s linear;
}

.style-form input[type=text]:focus, .style-form input[type=password]:focus, .style-form input[type=submit]:focus {
    box-shadow: 0px 0px 0.1px rgba(0, 0, 0, 1);
}

.no-boxshadow .style-form input[type=text]:focus, .no-boxshadow .style-form input[type=password]:focus {
    outline: -10px solid rgba(255, 255, 255, 0.1);
}

.style-form label {
    display: none;
    padding: 0 0 5px 2px;
    cursor: pointer;
}

.date:hover {
    background-color: #435664;
}

.style-form label:hover ~ input {
    border-color: #000;
    transition: 0.5s;
}

.style-form label:hover ~ input {
    border-color: #000;
    transition: 0.5s;
}

.no-placeholder .style-form label {
    display: block;
}

button {
    width: 100%;
    margin-bottom: 15px;
    border-radius: 5px;
    transition: 0.2s;
    background-color: #506371;
    border: dashed 2px black;
    font-size: 16pt;
}

button:hover {
    background-color: #405361;
}

button:active {
    background-color: rgba(50, 255, 50, 0.2);
    border-color: white;
}
</style>