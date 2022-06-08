import { defineStore } from 'pinia';
import axios from 'axios';

export const useSubscribersStore = defineStore({
  id: 'subscribers',

  state: () => ({
    subscribers: {},
    subscriber: {},
    errors: {}
  }),

  actions: {
    async fetchAll() {
      this.subscribers = { loading: true };

      axios.get('/api/v1/subscribers').then(response => {
        this.subscribers = response.data.data;
      });
    },

    async fetch(id) {
      this.subscriber = { loading: true };

      axios.get('/api/v1/subscribers/' + id).then(response => {
        this.subscriber = response.data.data;

        if (this.subscriber.fields) {
          // @toto - Check if we can use <component :is> with the Composition API.
          // Inject the Field vuejs component name for each field.
          this.subscriber.fields.forEach(field => {
            field.component = field.type[0].toUpperCase() + field.type.slice(1) + 'Field';
          });
        }
      });
    },

    async create(subscriber) {
      await axios.post('/api/v1/subscribers', subscriber).then(response => {
        this.resetErrors();
        this.subscriber = response.data.data;
      }).catch(error => {
        this.errors = error.response.data.errors;
        return Promise.reject(error.response.data.errors);
      });
    },

    async update(subscriber) {
      await axios.put('/api/v1/subscribers/' + subscriber.id, subscriber).then(response => {
        this.resetErrors();
        this.subscriber = response.data.data;
      }).catch(error => {
        this.errors = error.response.data.errors;
        return Promise.reject(error.response.data.errors);
      });
    },

    async addField(field) {
      await axios.post('/api/v1/subscribers/' + this.subscriber.id + '/field/' + field.id, {value: null}).then(response => {
        this.resetErrors();
        this.subscriber.fields.push(response.data.data);
      })
    },

    async deleteField(id) {
      await axios.delete('/api/v1/subscribers/' + this.subscriber.id + '/field/' + id).then(response => {
        this.resetErrors();
        let fieldIndexToRemove = this.subscriber.fields.findIndex(item => item.id === id);
        this.subscriber.fields.splice(fieldIndexToRemove, 1);
      })
    },

    reset() {
      this.subscriber = {};
    },

    resetErrors() {
      this.errors = {};
    }
  }
})
