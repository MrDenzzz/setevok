<template>
<div class="full-screen">
<div class="style-form">
    
    <h1>Авторизация</h1>
    <p>
        <label for="login">Email</label>
        <input v-model="login" type="text"  placeholder="Email" required>
    </p>
    <p>
        <label for="password">Пароль</label>
        <input type="password" v-model="password"  minlength="8" placeholder="Пароль" required>
    </p>
    <p v-if="check">Неверная Почта или Пароль</p>
    <p>
        {{mail}}<br>
        {{pass}}<br>
        </p>
    <p>
        <input @click="show('Modalreg')" type="submit" value="Регистрация">
        <input @click="checker(check)" type="submit" value="Войти">
    </p>
            <modals-container name="Modalreg">
        <Modalreg/>
        </modals-container>
</div>
</div>
</template>

<script>
import Modalreg from "./layouts/Modalreg";

export default {
  name: "Index",
  components: {
    Modalreg
  },
  data() {
    return {
      mail: "z@.ru",
      pass: "1",
      login: "",
      password: "",
      check: false
    };
  },
  methods: {
    checker : function(check){
           
           if (this.password != this.pass || this.mail != this.login){
           this.check = true;
           }else{
            this.check = false;
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
.full-screen {
    width: 99vw;
    height: 98vh;
    position: fixed;
    z-index: -1;
    background: #506371;
}

.style-form {
    /* Size and position */
    width: 390px;
    margin: 120px auto 10px;
    padding: 15px;
    position: relative;
    /* Font styles */
    font-family: 'Raleway', 'Lato', Arial, sans-serif;
    color: white;
    text-shadow: 0 3px 1px rgba(0, 0, 0, 0.5);
}

.style-form h1 {
    font-size: 22px;
    padding-bottom: 15px;
}

.style-form input[type=text], .style-form input[type=password] {
    /* Size and position */
    width: 95%;
    padding: 8px 4px 8px 10px;
    margin-bottom: 15px;
    /* Styles */
    border: 1px solid #4e3043; /* Fallback */
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

/* Fallback */
.no-boxshadow .style-form input[type=text]:focus, .no-boxshadow .style-form input[type=password]:focus {
    outline: -10px solid rgba(255, 255, 255, 0.1);
}

.style-form label {
    display: none;
    padding: 0 0 5px 2px;
    cursor: pointer;
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

.style-form input[type=submit] {
    width: 49%;
}
</style>