import server from "@/services/server";

const getWorkoutsHistory = (clientId) => {
  return (
    server
      .post("/api/listWorkoutHistory", {
        clientId: clientId,
      })
      .then((response) => response)
      .catch((error) => console.error(error))
  );
};

export default getWorkoutsHistory;