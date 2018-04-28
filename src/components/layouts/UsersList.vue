<template>
  <div>
    <label for="div">Список пользователей</label>
    <div class="filter">
      <input type="text" placeholder="Поиск по имени">
      <input type="text" placeholder="Поиск по городам">
      <input type="text" placeholder="Поиск по почте">
    </div>
  <ul>
    <li v-for="user in allUsers"
        :key = user.userId
        :user="user">
      <a :user="user" @click="getUser(user.userId)" >
        <p>
          {{ user.name }}
        </p>
        <p>
          {{ user.city}}
        </p>
        <p>
          {{ user.mail}}
        </p>
      </a>
    </li>
  </ul>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
        name: "UsersList",
      computed: {
        ...mapGetters(["allUsers"]),
      },
      methods: {
        getUser(id) {
          this.$router.push({
            path: "/user" + `/${id}`,
            params: {
              id: id
            }
          });
        },
      }
    }
</script>

<style lang="stylus" scoped>
  input[type="text"]
    border none
    outline-color rgba(255, 255, 255, 0)
  ul
    display flex
    flex-direction column
    justify-content space-around
    padding-left 0px

  li
    background-color rgba(0, 0, 0, 0.06)
    margin 10px
    flex-direction row
    border-radius 15px
    transition .3s
  li:hover
    background-color rgba(0, 0, 0, 0.08)
    transition .3s

  a
    display flex
    flex-direction row
    justify-content space-around
  .filter
    display flex
    flex-direction row
    justify-content space-between
  ::-webkit-input-placeholder {
    text-align: center;
  }

  :-moz-placeholder { /* Firefox 18- */
    text-align: center;
  }

  ::-moz-placeholder {  /* Firefox 19+ */
    text-align: center;
  }

  :-ms-input-placeholder {
    text-align: center;
  }
</style>
