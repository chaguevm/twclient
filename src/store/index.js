import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      logged: null,
      message: ''
    },
    isActive: false
  },
  mutations: {
    checkLogin: state => {
      console.log('Llamado a checklogin');
      axios.get('http://localhost:3000', { withCredentials: true })
      .then(response => {
        if(response.data.code === 403 && response.data.success === 'Already Logged'){
          state.user.logged = true;
          state.user.message = response.data.success;
        }
        else if(response.data.code === 403 && response.data.success === 'Must be logged'){
          state.user.logged = false;
          state.user.message = response.data.success;
        }
      }).catch(error => {
        console.log(error);
      })
    },
    unCheckLogin: state => {
      state.user.logged = null;
      state.user.message = '';
    },
    turnOn: state => {
      state.isActive = true
    },
    turnOff: state => {
      state.isActive = false
    }
  },
  actions: {
  },
  modules: {
  }
})
