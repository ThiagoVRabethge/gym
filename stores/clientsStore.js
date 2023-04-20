import { create } from "zustand";

const useClientsStore = create((set) => ({
  clientsList: [],
  setClientsList: (newClientsList) => set((state) => ({ clientsList: newClientsList })),
}));

export default useClientsStore;