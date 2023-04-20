import { create } from "zustand";

const useWorkoutsStore = create((set) => ({
  workoutsList: [],
  setWorkoutsList: (newWorkoutsList) => set((state) => ({ workoutsList: newWorkoutsList })),

  selectedWorkout: [],
  setSelectedWorkout: (newSelectedWorkout) => set((state) => ({selectedWorkout: newSelectedWorkout})),

  workoutHistory: [],
  setWorkoutHistory: (newWorkoutHistory) => set((state) => ({workoutHistory: newWorkoutHistory})),
}));

export default useWorkoutsStore;