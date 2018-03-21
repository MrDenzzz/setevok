<template>
<div class="modal-form style-form">
    <h1>Регистрация</h1>
    
    <p>     
        <input type="text"  placeholder="Имя" required>
    </p>
 
    <p>    
        <input type="password" placeholder="Email" required>
    </p> 
    
    <p> 
        <input type="password" placeholder="Пароль" v-model='pass' minlength="8" required>
    </p>
 
    <p>  
        <input type="password" placeholder="Повторите пароль" v-model='pass2' minlength="8" required>
    </p>     
            <p v-if="pass != pass2">Пароль не совпадает</p>
    <p>
        <input @click="show('Modalmail')" type="submit" value="Подтвердить">
    </p>     
        <modals-container name="Modalmail">
        <modalmail/>
        </modals-container>
</div>
</template>

<script>
import Modalmail from './Modal-mail'


name:'Modalreg'
components:{
    Modalmail
}
    export default {
        data(){
                return{
                    pass: "",
                    pass2: ""
                }
            
        },
         methods : {
            show(){
                this.$modal.show(Modalmail, {
                    text: 'This text is passed as a property'
                    }, {
                    draggable: true
                    })
      }
  }

        
    }
</script>

<style lang="stylus">
.modal-form
    text-align center

.v--modal-box
    background-color #506371
    border-radius 5px  
    width 400px !important
    height auto !important
.style-form input{
    width 80%
}
</style>