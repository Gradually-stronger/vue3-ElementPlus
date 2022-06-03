import login from "./login/index";
import { createStore  } from 'vuex';
import Layout from './Layout/index'





export  const store= createStore({
    state:()=>({
    }),
    getters: {

    },
    actions: {
      
    },
    mutations: {
       
    },

    modules:{
       ...login,
        Layout
    },

})
