import server from "@/services/server";

const getWorkouts = () => {
  return (
    server
      .get("/workouts")
      .then((response) => response)
      .catch((error) => console.error(error))
  );
};

export default getWorkouts;