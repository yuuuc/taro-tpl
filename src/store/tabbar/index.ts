import { defineStore } from 'pinia';

export const useTabberStore = defineStore('tabbar', {
  state: () => ({ selected: 0 }),
  getters: {},
  actions: {
    setSelected(selected: number) {
      this.selected = selected;
    },
  },
});
