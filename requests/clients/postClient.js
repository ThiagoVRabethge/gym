import server from "@/services/server";

const postClient = (name, email, mobile, workoutId) => {
  return (
    server
      .post("/addClient", {
        name: name,
        email: email,
        mobile: mobile,
        workoutId: workoutId,
      })
      .then((response) => response)
      .catch((error) => console.error(error))
  );
};

export default postClient;