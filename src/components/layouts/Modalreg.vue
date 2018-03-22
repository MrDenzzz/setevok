<template>
<div class="modal-form style-form">
    <h1>Регистрация</h1>

    <form @submit.prevent="show('Modalmail');hide('Modalreg')">
     
        <input type="text"  placeholder="Имя" v-modal=users.name required>
        
        <input type="mail" placeholder="Email" v-model=users.mail required>
     
        <input type="password"  minlength="8" placeholder="Пароль" v-model='newUser.pass' required>
     
        <input @focus="this.focused = true" @blur="this.focused = false" type="password" placeholder="Повторите пароль" v-model='pass2' required>
        <p>{{pass2}}
            {{newUser.pass}}</p>
        <p v-if="!((newUser.pass === pass2) === this.focused)">Пароль не совпадает</p>
        
    
        <button @click="madeWorker()" type="submit">Подтвердить</button>
      
    </form>
        <modals-container name="Modalmail">
        <modalmail/>
        </modals-container>
</div>
</template>

<script>
import Modalmail from "./Modal-mail";

name: "Modalreg";
components: {
  Modalmail;
}
export default {
  data() {
    return {
      pass2: "",
      focused:true,

      newUser: {
        pass: "",
        id: 124,
        userId: "",
        name: "",
        mail: "",
        path: "/worker"
      }
    };
  },
  computed: {
    users() {
      return this.$store.state.users 
    }
  },
  methods: {
    madeWorker() {
      this.users.userId = this.id++;
      this.newUser.id++;
      this.$store.state.users.push(this.newUser);
      console.log(this.$store.state.users[3]);
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