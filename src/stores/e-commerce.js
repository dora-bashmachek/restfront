import { defineStore } from 'pinia'
import Axios from 'axios'
import { useLocalStorage } from '@vueuse/core'
import qs from 'qs'

const axios = Axios.create({
  baseURL: 'http://localhost:1337',
})


export const useECommerceStore = defineStore({
  id: 'e-commerce',
  state: () => ({
    products: useLocalStorage('products'),
    product: useLocalStorage('product'),
    categories: useLocalStorage('categories'),
  }),
  getters: {},
  actions: {
    async fetchProducts(query) {
      const url = query ? '/api/products?' + qs.stringify(query,{ encodeValuesOnly: true }) : '/api/products?pagination[page]=1&pagination[pageSize]=10';
      const { data } = await axios.get(url)
      this.products = data
    },
    async fetchProduct(id) {
      const { data } = await axios.get(`/api/products/${id}`)
      this.product = data
    },
    async fetchCategories() {
      const { data } = await axios.get('/api/categories')
      this.categories = data
    }
  }
})
// qs.stringify(query,{ encodeValuesOnly: true })