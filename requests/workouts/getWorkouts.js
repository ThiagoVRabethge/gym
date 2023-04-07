import server from "@/services/server";

const getWorkouts = () => {
  return (
    server
      .get("/listWorkouts")
      .then((response) => response)
      .catch((error) => console.error(error))
  );
};

export default getWorkouts;