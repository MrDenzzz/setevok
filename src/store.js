import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [
      {
        userId: 123,
        name: "Олег",
        part: "Исполнитель",
        city: "Волков",
        path: "/worker",
        mail: "z@.ru",
        pass: "1"
      },
      {
        userId: 124,
        name: "Вася",
        part: "Администратор",
        city: "Москва",
        path: "/admin",
        mail: "z@.com",
        pass: "2"
      }
    ],
    reports: [
      {
        id: 0,
        userId: 123,
        date: "2012-22-22",
        city: "Волков",
        cinema: "dubay",
        film: "dobby2",
        kind: "Реклама",
        type: "Открытая",
        name: "Олег",


        poster: [0, false],
        flaers: [0, false],
        siti: [0, false],
        hard: [0, false],
        stand: [0, false],

        time: "0",
        sessions: "0",
        people: "0",
        cost: "0",
        hall: "0",
        row: "0",
        seat: "0",

        pictures: [],
        filled: false
      },
      {
        id: 1,
        userId: 123,
        date: "2012-22-22",
        city: "Волков",
        cinema: "dubay",
        film: "dobby",
        kind: "Сеансы",
        type: "Скрытая",
        name: "Олег",

        poster: [0, false],
        flaers: [0, false],
        siti: [0, false],
        hard: [0, false],
        stand: [0, false],

        time: "0",
        sessions: "0",
        people: "0",
        cost: "0",
        hall: "0",
        row: "0",
        seat: "0",

        pictures: [],
        filled: false
      },
    ],
    cinemas: [
      {
        city: "Питер",
        cinema1: "Аврора",
        cinema2: "Лиговъ"
      },
    ],
    // orderList: [
    //   {
    //     id: "0",
    //     order: "dobby",
    //   },
    //   {
    //     id: "1",
    //     order: "dodo",
    //   },
    //   {
    //     id: "2",
    //     order: "dodo2",
    //   },
    // ],
    orders:[
      {
        orderId: 0,
        film: "dobby",
        cinema: ["11111", "Аврора", "Лигов"],
        kind: "Реклама",
        type: "Открытая",
      },
      {
        orderId: 1,
        film: "dobby2",
        cinema: ["11111", "111", "Лигов"],
        kind: "Сеансы",
        type: "Скрытая",
      }
      //   : {
      //   city:"Питер",
      //   cinema:[
      //     "1111111",
      //     "admdnr"
      //   ]
      // },
      // city2: {
      //   city:"Москва",
      //   cinema:[
      //     "111",
      //     "dodo"
      //   ]
      // }
    ]
  },
  actions: {
    ReportDataRequest: ({commit, dispatch}, reports) => {
      return new Promise((resolve, reject) => {
        commit('NEW_Report_DATA', reports);
      });
    },
    madeNewReport: ({commit, dispatch}, newReport) => {
      return new Promise((resolve, reject) => {
        commit('NEW_Report', newReport);
      })
    },
    madeNewOrder: ({commit, dispatch}, newOrder) => {
      return new Promise((resolve, reject) => {
        commit('NEW_Order', newOrder);
      })
    },
    madeNewUser: ({commit, dispatch}, newUser) => {
      return new Promise((resolve, reject) => {
        commit('NEW_USER', newUser);
      })
    },
    addPicture: ({commit, dispatch}, picture, ReportId) => {
      return new Promise((resolve, reject) => {
        commit('ADD_PICTURE', picture, ReportId);
      });
    }
  },
  mutations: {
    NEW_Report_DATA(state, reports) {
          state.reports.push(reports[ReportId]);
        },
    NEW_Report(state, newReport) {
      state.reports.push(newReport);
      },
    NEW_Order(state, newOrder) {
      state.orders.push(newOrder);
    },
    NEW_USER(state, newUser) {
      state.users.push(newUser);
      },
    ADD_PICTURE(state, picture, ReportId) {
      state.reports[this.ReportId].pictures.push(picture);
      }
    },
  getters: {
    reports: state => state.reports,
    allUsers: state => state.users,
    orders: state => state.orders,

  },
});
