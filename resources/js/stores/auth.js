import {defineStore} from 'pinia';
import axios from 'axios';
import router from '@/router';

export const useAuthStore = defineStore({
  id: 'auth',

  state: () => ({
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')),
    errors: {}
  }),

  actions: {
    async login(email, password) {
      const self = this;

      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/login', { email: email, password: password }).then(response => {
          self.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', JSON.stringify(true));
        }).catch(error => {
          this.errors = error.response.data;
          return Promise.reject(error.response.data);
        }).finally(() => {
          router.push({name: 'home'});
        });
      });
    }
  }
})
