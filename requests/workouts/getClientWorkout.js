import server from "@/services/server";

const getClientWorkout = (selectedClientWorkoutId) => {
  return server
    .post("/listClientWorkout", {
      selectedClientWorkoutId: selectedClientWorkoutId,
    })
    .then((response) => response)
    .catch((error) => console.error(error));
};

export default getClientWorkout;