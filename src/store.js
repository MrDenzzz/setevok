import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [{
        userId: 123,
        name: "Олег",
        part: "worker",
        city: "Волков",
        path: "/worker",
        mail: "z@.ru",
        pass: "1"
      },
      {
        userId: 124,
        name: "Вася",
        part: "admin",
        city: "Москва",
        path: "/admin",
        mail: "z@.com",
        pass: "2"
      }
    ],
    orders: [{
        id: "0",
        date: null,
        city: "Волков",
        cinema: "dubay",
        kind: "Реклама",
        type: "Открытая",
        name: "Олег",
        siti: "2",
        hard: "2",
        poster:"2",
        flaers:"1000",
        stand: "2",
        pictures: ["weefew","wefawef"],
        filled: false
      },
      {
        id: "1",
        date: null,
        city: "Волков",
        cinema: "dubay",
        kind: "Сеансы",
        type: "Скрытая",
        name: "Олег",
        poster: "1",
        flaers:"500",
        siti: "1",
        hard: "1",
        stand: "0",
        pictures: ["weefew","wefawef"],
        filled: false
      },
    ],
    cinemas: [{
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
  actions: {
    orderDataRequest: ({commit, dispatch}, orderData) => {
      return new Promise((resolve, reject) => {
        commit('NEW_ORDER_DATA', orderData);  
      });
    }
  },
  mutations: {
    NEW_ORDER_DATA(state, orderData) {
      for (let i = 0; i < state.orderDates.length; i++) {
        if (orderData[i].filled == true || "0") {
          state.orderDates.push(orders[orderId]);
        }
      }
    }
  },
  getters: {
    orders:state => state.orders,
    customOrder: state => state.customOrder,
    allUsers: state => state.users,
    orderDates: state => state.OrderDates

  },
});
