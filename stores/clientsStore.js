import { create } from "zustand";

const useClientsStore = create((set) => ({
  clientsList: [],
  setClientsList: (newClientsList) => set((state) => ({ clientsList: newClientsList })),

  selectedClient: {},
  setSelectedClient: (newSelectedClient) => set((state) => ({selectedClient: newSelectedClient})),
}));

export default useClientsStore;