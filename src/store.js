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
        id: 0,
        date: "2012-22-22",
        city: "Волков",
        cinema: "dubay",
        kind: "Реклама",
        type: "Открытая",
        name: "Олег",
        siti: ["2", false],
        hard: ["2", false],
        poster: ["2", false],
        flaers:["1000", false],
        stand: ["2", false],
        pictures: [],
        filled: false
      },
      {
        id: 1,
        date: "2012-22-22",
        city: "Волков",
        cinema: "dubay",
        kind: "Сеансы",
        type: "Скрытая",
        name: "Олег",
        poster: ["1", false],
        flaers: ["500", false],
        siti: ["1", false],
        hard: ["1", false],
        stand: ["0", false],
        pictures: [],
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
    orderDataRequest: ({commit, dispatch}, orders) => {
      return new Promise((resolve, reject) => {
        commit('NEW_ORDER_DATA', orders);  
      });
    },
    madeNewOrder: ({commit, dispatch}, newOrder) => {
      return new Promise((resolve, reject) => {
        commit('NEW_ORDER', newOrder);
      })
    },
    addPicture: ({commit, dispatch}, picture, orderId) => {
      return new Promise((resolve, reject) => {
        commit('ADD_PICTURE', picture, orderId);  
      });
    }
  },
  mutations: {
    NEW_ORDER_DATA(state, orders) {
          state.orders.push(orders[orderId]);
        },
    NEW_ORDER(state, newOrder) {
      state.orders.push(newOrder);
      },
    ADD_PICTURE(state, picture, orderId) {
      state.orders[this.orderId].pictures.push(picture);
      }
    },
  getters: {
    orders:state => state.orders,
    allUsers: state => state.users,

  },
});
