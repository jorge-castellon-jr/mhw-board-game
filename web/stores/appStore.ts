import { defineStore } from "pinia";


export const useAppStore = defineStore("app", {
  state: () => ({
    pageIndex: 'hunters',
    isDarkMode: true,
  }),
  getters: {
  },
  actions: {
  },
});