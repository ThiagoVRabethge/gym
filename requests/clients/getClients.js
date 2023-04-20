import server from "@/services/server";

const getClients = () => {
  return (
    server
      .get("/api/listClients")
      .then((response) => response)
      .catch((error) => console.error(error))
    );
};

export default getClients;