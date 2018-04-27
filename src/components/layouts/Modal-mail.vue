<template>
    <div class="modal">
        <div class="check-mail">

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
          this.newUser.path + `/${userId}`,
        params: {
          userId: this.newUser.userId,
        }
      });
    },
  },
};
</script>

<style lang="stylus" scoped>


</style>
