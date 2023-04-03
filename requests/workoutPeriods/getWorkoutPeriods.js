import server from "@/services/server";

const getWorkoutPeriods = () => {
  return (
    server
      .get("/listWorkoutPeriods")
      .then((response) => response)
      .catch((error) => console.error(error))
  );
};

export default getWorkoutPeriods;