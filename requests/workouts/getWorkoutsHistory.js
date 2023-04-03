import server from "@/services/server";

const getWorkoutsHistory = () => {
  return (
    server
      .get("/listWorkoutHistory", {
        clientId: "",
        workoutId: "",
      })
      .then((response) => response)
      .catch((error) => console.error(error))
  );
};

export default getWorkoutsHistory;