import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  stats: null,
  routine: null,

  setUser: (user) => set({ user }),
  setStats: (newStats) => set({ stats: newStats }),
  setRoutine: (routine) => set({ routine }),
}));

export default useStore;
