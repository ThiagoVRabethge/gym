import getWorkouts from "@/requests/workouts/getWorkouts";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { PlusLg } from "react-bootstrap-icons";
import AddWorkoutModal from "../../components/modals/AddWorkoutModal";
import Nav from "@/components/nav/Nav";
import server from "@/services/server";

const Workouts = () => {
  const [workoutsList, setWorkoutsList] = useState([]);

  const GetWorkouts = () => {
    server
      .get("/api/listWorkouts")
      .then((response) => {
        setWorkoutsList(response.data);
      });
  };

  useMemo(() => {
    GetWorkouts();
  }, []);

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

      <Nav />

      <div className="container">
        <button
          type="button"
          className="btn btn-primary mt-3 mb-3 btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#AddWorkoutModal"
        >
          <PlusLg /> Cadastrar novo treino
        </button>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Exercícios</th>
                <th>Séries</th>
                <th>Repetições</th>
                <th>Descanso</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              {workoutsList &&
                workoutsList.map((workout) => (
                  <tr>
                    <td>{workout.name}</td>
                    <td>{workout.exercises}</td>
                    <td>{workout.series}</td>
                    <td>{workout.repetitions}</td>
                    <td>{workout.rest}</td>
                    <td>{workout.observations}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddWorkoutModal id="AddWorkoutModal" GetWorkouts={GetWorkouts} />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Workouts;