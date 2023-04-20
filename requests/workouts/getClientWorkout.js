import server from "@/services/server";

const getClientWorkout = (clientWorkoutId) => {
  return (
    server
      .post("/api/listClientWorkout", {
        clientWorkoutId: clientWorkoutId,
      })
      .then((response) => response)
      .catch((error) => console.error(error))
  );
};

export default getClientWorkout;