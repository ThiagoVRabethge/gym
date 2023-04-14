import { create } from 'zustand';

const useClientStore = create((set) => ({
    clientsList: [],
    setClientsList: (newClientsList) => set(() => ({clientsList: newClientsList})),
}));

export default useClientStore;