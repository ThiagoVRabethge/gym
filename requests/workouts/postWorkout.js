import server from "@/services/server";

const postWorkout = (workoutName,exercises,series,repetitions,rest,observations) => {
  return (
    server
      .post("/addWorkout", {
        workoutName: workoutName,
        exercises: exercises,
        series: series,
        repetitions: repetitions,
        rest: rest,
        observations: observations,
      })
      .then((response) => response)
      .catch((error) => console.error(error))
  );
};

export default postWorkout;