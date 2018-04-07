<template>
<div class="modal-form style-form">
    <h1>Регистрация</h1>
<!-- @submit.prevent="show('Modalmail');hide('Modalreg')" -->
    <form @submit.prevent="show('Modalmail')">
     
        <input type="text"  placeholder="Имя" v-model=newUser.name required>
        
        <input type="mail" placeholder="Email" v-model=newUser.mail required>

        <input type="text" placeholder="Город в котором Вы будете проверять" v-model=newUser.city required>        
     
        <input type="password"  minlength="8" placeholder="Пароль не менее 8 символов" v-model='newUser.pass' required>
     
        <input @blur="this.focused = false" type="password" placeholder="Повторите пароль" v-model='pass2' required>
        <p>{{pass2}}
            {{newUser.pass}}</p>
        <p v-if="!((newUser.pass === pass2) === this.focused)">Пароль не совпадает</p>
        
    
        <button @click="show('Modalmail')" type="submit">Подтвердить</button>
      
    </form>
        <modal name="Modalmail" :new-user="newUser"/>
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
  watch: {
    "newUser.name": function(val) {
      console.log(val, "val");
    }
  },
  computed: mapGetters({ users: "allUsers" }),
  methods: {
    madeWorker() {
      this.newUser.userId++;
      this.users.push(this.newUser);
      this.$router.push({
        path:
          this.newUser.path +
          `/${this.newUser.userId}/${this.newUser.city}/${this.newUser.name}`,
        params: {
          userId: this.newUser.userId,
          name: this.newUser.name,
          city: this.newUser.city
        }
      });
    },
    show() {
      this.$modal.show(
        Modalmail,
        {
          text: "This text is passed as a property"
        },
        {
          draggable: true
        }
      );
    },
    hide() {
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

<style lang="stylus">
.style-form {
  position: relative;
  font-family: 'Raleway', 'Lato', Arial, sans-serif;
  color: white;
  text-shadow: 0 3px 1px rgba(0, 0, 0, 0.5);
}

.style-form h1 {
  font-size: 22px;
  padding-bottom: 15px;
}

.style-form input[type=text], .style-form input[type=password], .style-form input[type=mail], {
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

.style-form input[type=text]:hover, .style-form input[type=password], .style-form input[type=mail]:hover {
  border-color: #435664;
  box-shadow: inset 123px 108px -198px #435664;
  transition: all 0.4s linear;
}

.style-form input[type=text]:focus, .style-form input[type=password], .style-form input[type=mail]:focus, .style-form input[type=submit]:focus {
  box-shadow: 0px 0px 0.1px rgba(0, 0, 0, 1);
}

.no-boxshadow .style-form input[type=text]:focus, .no-boxshadow .style-form input[type=password], .style-form input[type=mail]:focus {
  outline: -10px solid rgba(255, 255, 255, 0.1);
}

.style-form label {
  display: none;
  padding: 0 0 5px 2px;
  cursor: pointer;
}

.modal-form {
  text-align: center;
}

.v--modal-box {
  background-color: #506371;
  border-radius: 5px;
  width: 100% !important;
  height: auto !important;
  max-width: 400px;
}

.style-form input {
  width: 80%;
}

button, input {
  width: 80%;
  margin-bottom: 15px;
}
</style>