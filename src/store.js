import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        users: [
            {
              userId: "123",
              part: "worker",
              path: "/worker",
              mail: "z@.ru",
              pass: "1"
            },
            {
              userId: "124",
              part: "admin",
              path: "/admin",
              mail: "z@.com",
              pass: "2"
            }
          ],
        
    }
});