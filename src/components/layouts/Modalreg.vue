<template>
<div class="modal-form style-form">
    <h1>Регистрация</h1>
    
    <p>     
        <input type="text"  placeholder="Имя" required>
    </p>
 
    <p>    
        <input type="mail" placeholder="Email" required>
    </p> 
    
    <p> 
        <input type="password"  minlength="8" placeholder="Пароль" v-model='pass' required>
    </p>
 
    <p>  
        <input @focus="focused = true" @blur="focused = false" type="password" placeholder="Повторите пароль" v-model='pass2' required>
    </p>     
            <p v-if="pass != pass2 && focused">Пароль не совпадает</p>
    <p>
        <input @click="show('Modalmail');hide('Modalreg')" type="submit" value="Подтвердить">
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
      },
            hide(){
                this.$modal.show(Modalreg, {
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