import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  
    users: [{
        userId: "123",
        name: "Олег",
        part: "worker",
        city: "Волков",
        path: "/worker",
        mail: "z@.ru",
        pass: "1"
      },
      {
        userId: "124",
        name: "Вася",
        part: "admin",
        city: "Москва",
        path: "/admin",
        mail: "z@.com",
        pass: "2"
      }
    ],
    orders: [
      {
      id: "1",
      date: "2018-12-32",
      city: "Волков",
      cinema: "dubay",
      kind: "Реклама",
      type: "Открытая"
    },
    {
      id: "2",
      date: "2018-12-32",
      city: "Волков",
      cinema: "dubay",
      kind: "Сеансы",
      type: "Скрытая"
    },
    
  ],
  cinemas: [
    {
      city: "Питер",
      cinema1: "Аврора",
      cinema2: "Лиговъ"
    },
    {
      city: "Mосква",
      cinema1: "alla",
      cinema2: ";sdf;"
    }
  ]

  },
  getters: {
    allOrders(state) {
      return state.orders;
    },
    customOrder(state) {
      return state.customOrder;
    },
    allUsers(state) {
      return state.users;
    },

  }
});
