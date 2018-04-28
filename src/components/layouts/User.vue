<template>
  <div>
  <div class="form">
    <!--<p>{{ user[userId].name }}</p>-->
    <!--<p>{{ user[userId].city }}</p>-->
    <!--<p>{{ user[userId].mail }}</p>-->
    <!--<p>{{ user[userId].path }}</p>-->
    <p>Эта зараза чего то не отображает</p>
    <p>Эта зараза чего то не отображает</p>
    <p>Эта зараза чего то не отображает</p>
    <p>Эта зараза чего то не отображает</p>
    <button>Изменить</button>
    <button>Удалить</button>


<textarea placeholder="текст сообщения" name="" id="" cols="30" rows="10"></textarea>
    <button>Отправить сообщение</button></div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
        name: "User",
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        userId: this.$route.params.id
      }
    },
    computed: {
      ...mapGetters(["allUsers"]),
    },

    }
</script>

<style lang="stylus" scoped>
  textarea
    margin-top 15px
</style>
