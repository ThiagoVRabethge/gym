import server from "@/services/server";

const postPreReadyWorkout = (selectedClient, selectedWorkout) => {
    return (
      server
        .post("/addPreReadyWorkout", {
          selectedClient: selectedClient,
          selectedWorkout: selectedWorkout,
        })
        .then((response) => response)
        .catch((error) => console.error(error))
    );
};

export default postPreReadyWorkout;