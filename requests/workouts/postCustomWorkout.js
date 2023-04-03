import server from "@/services/server";

const postCustomWorkout = (clientId, name, exercises, series, repetitions) => {
  return (
    server
      .post("/addCustomWorkout", {
        clientId: clientId,
        name: name,
        exercises: exercises,
        series: series,
        repetitions: repetitions,
      })
      .then((response) => response)
      .catch((error) => console.error(error))
  );
};

export default postCustomWorkout;