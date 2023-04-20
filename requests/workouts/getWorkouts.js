import server from "@/services/server";

const getWorkouts = () => {
  return (
    server
      .get("/api/listWorkouts")
      .then((response) => response)
      .catch((error) => console.error(error))
  );
};

export default getWorkouts;