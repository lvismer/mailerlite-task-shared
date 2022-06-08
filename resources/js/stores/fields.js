import { defineStore } from 'pinia';
import axios from 'axios';

export const useFieldsStore = defineStore({
  id: 'fields',

  state: () => ({
    fields: {},
    field: {},
    errors: {},
  }),

  actions: {
    async fetchAll() {
      this.fields = { loading: true };

      axios.get('/api/v1/fields').then(response => {
        this.fields = response.data.data;
      });
    },

    async fetch(id) {
      axios.get('/api/v1/fields/' + id).then(response => {
        this.field = response.data.data;
      });
    },

    async create(field) {
      await axios.post('/api/v1/fields', field).then(response => {
        this.resetErrors();
        this.field = response.data.data;
      }).catch(error => {
        this.errors = error.response.data.errors;
        return Promise.reject(error.response.data.errors);
      });
    },

    async update(field) {
      await axios.put('/api/v1/fields/' + field.id, field).then(response => {
        this.resetErrors();
        this.field = response.data.data;
      }).catch(error => {
        this.errors = error.response.data.errors;
        return Promise.reject(error.response.data.errors);
      });
    },

    reset() {
      this.subscriber = {};
    },

    resetErrors() {
      this.errors = {};
    }
  }
})
