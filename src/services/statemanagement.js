import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  stats: null,

  setUser: (user) => set({ user }),
  setStats: (newStats) => set({ stats: newStats }),
}));

export default useStore;
