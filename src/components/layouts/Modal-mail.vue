<template>
    <div>
        <div class="modal check-mail">
            
            <p class="modal-access">Вам на почту было отправлено письмо с подтверждением</p>
            
            <a href="https://myaccount.google.com/">
                <icon name="google"></icon>
            </a>
            <a href="https://mail.yandex.ru/" >
                <icon name="fa-yandex"></icon>
            </a>
            <a href="https://account.mail.ru/">
                <icon name="mail"></icon>
            </a>
                <button @click="madeWorker()">Проверить создан ли пользователь</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Modalmail",
  props: {
    newUser: {
      type: Object,
      reguired: true
    }
 
  },
  computed: mapGetters({ users: "allUsers" }),
  methods: {
    madeWorker() {
      console.log(this.zxc);
      return;
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
      this.$modal.show(Modalmail, {
        draggable: true
      });
    }
  },
  mounted() {
    console.log(this.zxc, 'this.newUser');
  }
};
</script>

<style lang="stylus" scoped>
.modal
  width 100%
  height 100%;


</style>