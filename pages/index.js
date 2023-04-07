import { useEffect, useMemo, useState } from "react";
import getClients from "@/requests/clients/getClients";
import Head from "next/head";
import PreReadyWorkoutModal from "../components/modals/PreReadyWorkoutModal";
import AddClientModal from "@/components/modals/AddClientModal";
import getWorkouts from "@/requests/workouts/getWorkouts";
import WorkoutExercisesModal from "../components/modals/WorkoutExercisesModal";
import CustomWorkoutModal from "../components/modals/CustomWorkoutModal";
import { PlusLg } from "react-bootstrap-icons";
import Link from "next/link";
import getClientWorkout from "@/requests/workouts/getClientWorkout";
import postClient from "../requests/clients/postClient";
import Nav from "@/components/nav/Nav";
import getWorkoutsHistory from "@/requests/workouts/getWorkoutsHistory";
import server from "@/services/server";
import WorkoutsHistoryModal from "@/components/modals/WorkoutsHistoryModal";

const Index = () => {
  const [clientsList, setClientsList] = useState([]);
  const [selectedClient, setSelectedClient] = useState({});

  const [workoutsList, setWorkoutsList] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState([]);

  const [workoutHistory, setWorkoutHistory] = useState([]);

  const GetClients = () => {
    server
      .get("https://gym-nu-lyart.vercel.app/api/listClients")
      .then((response) => {
        setClientsList(response.data);
      });
  };

  const GetWorkouts = () => {
    server
      .get("https://thiagovrabethge-ominous-enigma-jw944566j5p3vx7-3000.preview.app.github.dev/api/listWorkouts")
      .then((response) => {
        setWorkoutsList(response.data);
      })
      .catch((error) => {error: error.message});
  };

  useMemo(() => {
    GetClients();
    GetWorkouts();
  }, []);

  const HandleLoadTrainingToForm = (client) => {
    setSelectedClient(client);

    // getClientWorkout(client.workout_id).then((response) => {
    //   setSelectedWorkout(response.data);
    // });

    server
      .post("https://thiagovrabethge-ominous-enigma-jw944566j5p3vx7-3000.preview.app.github.dev/api/listClientWorkout", {
        clientWorkoutId: client.workout_id,
      })
      .then((response) => {
        console.log(response);
        setSelectedWorkout(response.data);
      });

    // server
    //   .post("/listWorkoutHistory", {
    //     clientId: client.client_id,
    //   })
    //   .then((response) => setWorkoutHistory(response.data))
    //   .catch((error) => console.error(error));

    // getWorkoutsHistory(client.client_id, client.workout_id)
    //   .then((response) => {
    //     console.log(response);
    //   });

    // server
    //   .post("/listClientWorkout", {
    //     selectedClientWorkoutId: client.workout_id,
    //   })
    //   .then((response) => {
    //     setSelectedWorkout(response.data);
    //   });
  };

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />
        <title>Consultoria Fitness</title>
      </Head>

      <div className="container">
        <Nav />

        <button
          type="button"
          className="btn btn-primary mb-3 mt-3"
          data-bs-toggle="modal"
          data-bs-target="#AddClientModal"
        >
          <PlusLg />
          Adicionar novo cliente
        </button>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {clientsList &&
                clientsList.map((client) => (
                  <tr key={client.id}>
                    <td>{client.name}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm me-3"
                        data-bs-toggle="modal"
                        data-bs-target="#PreReadyWorkoutModal"
                        onClick={() => HandleLoadTrainingToForm(client)}
                      >
                        Treino pré-pronto
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary btn-sm me-3"
                        data-bs-toggle="modal"
                        data-bs-target="#CustomWorkoutModal"
                        onClick={() => HandleLoadTrainingToForm(client)}
                      >
                        Treino personalizado
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#WorkoutExercisesModal"
                        onClick={() => HandleLoadTrainingToForm(client)}
                      >
                        Exercícios do treino
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddClientModal
        id="AddClientModal"
        workoutsList={workoutsList}
        GetClients={GetClients}
      />

      <PreReadyWorkoutModal
        id="PreReadyWorkoutModal"
        client={selectedClient}
        workoutsList={workoutsList}
      />

      <CustomWorkoutModal id="CustomWorkoutModal" client={selectedClient} />

      <WorkoutExercisesModal
        id="WorkoutExercisesModal"
        client={selectedClient}
        selectedWorkout={selectedWorkout}
        workoutHistory={workoutHistory}
      />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Index;