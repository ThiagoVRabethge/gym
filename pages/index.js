// import { useEffect, useMemo, useState } from "react";
// import getClients from "@/requests/clients/getClients";
// import Head from "next/head";
// import PreReadyWorkoutModal from "../components/modals/PreReadyWorkoutModal";
// import AddClientModal from "@/components/modals/AddClientModal";
// import getWorkouts from "@/requests/workouts/getWorkouts";
// import WorkoutExercisesModal from "../components/modals/WorkoutExercisesModal";
// import CustomWorkoutModal from "../components/modals/CustomWorkoutModal";
// import { PlusLg } from "react-bootstrap-icons";
// import Link from "next/link";
// import getClientWorkout from "@/requests/workouts/getClientWorkout";
// import postClient from "../requests/clients/postClient";
// import Nav from "@/components/nav/Nav";
// import getWorkoutsHistory from "@/requests/workouts/getWorkoutsHistory";
// import server from "@/services/server";
// import WorkoutsHistoryModal from "@/components/modals/WorkoutsHistoryModal";

// const Index = () => {
//   const [clientsList, setClientsList] = useState([]);
//   const [selectedClient, setSelectedClient] = useState({});

//   const [workoutsList, setWorkoutsList] = useState([]);
//   const [selectedWorkout, setSelectedWorkout] = useState([]);

//   const [workoutHistory, setWorkoutHistory] = useState([]);

//   // useEffect(() => {
//   //   GetClients();
//   //   GetWorkouts();
//   // }, []);

//   const GetClients = () => {
//     getClients().then((response) => setClientsList(response.data));
//   };

//   const GetWorkouts = () => {
//     getWorkouts().then((response) => {
//       setWorkoutsList(response.data);
//     });
//   };

//   useMemo(() => {
//     GetClients();
//     GetWorkouts();
//   }, []);

//   const HandleLoadTrainingToForm = (client) => {
//     setSelectedClient(client);

//     getClientWorkout(client.workout_id).then((response) => {
//       setSelectedWorkout(response.data);
//     });

//     server
//       .post("/listWorkoutHistory", {
//         clientId: client.client_id,
//       })
//       .then((response) => setWorkoutHistory(response.data))
//       .catch((error) => console.error(error));

//     // getWorkoutsHistory(client.client_id, client.workout_id)
//     //   .then((response) => {
//     //     console.log(response);
//     //   });

//     // server
//     //   .post("/listClientWorkout", {
//     //     selectedClientWorkoutId: client.workout_id,
//     //   })
//     //   .then((response) => {
//     //     setSelectedWorkout(response.data);
//     //   });
//   };

//   const HandleAddNewClient = (e) => {
//     e.preventDefault();

//     let name = e.target[0].value;
//     let email = e.target[1].value;
//     let mobile = e.target[2].value;
//     let workoutId = e.target[3].value;

//     postClient(name, email, mobile, workoutId).then(() => {
//       GetClients();
//     });
//   };

//   const HandleAddWorkout = (e) => {
//     e.preventDefault();

//     let name = e.target[0].value;
//     let exercises = e.target[1].value;
//     let series = e.target[2].value;
//     let repetitions = e.target[3].value;

//     postWorkout(name, exercises, series, repetitions).then(() => {
//       GetWorkouts();
//     });
//   };

//   const HandleAddPreReadyWorkout = (e) => {
//     e.preventDefault();

//     let selectedClient = selectedClient.client_id;
//     let selectedWorkout = e.target[0].value;

//     postPreReadyWorkout(selectedClient, selectedWorkout);
//   };

//   const HandleAddCustomWorkout = (e) => {
//     let clientId = selectedClient.client_id;
//     let name = e.target[0].value;
//     let exercises = e.target[1].value;
//     let series = e.target[2].value;
//     let repetitions = e.target[3].value;

//     postCustomWorkout(clientId, name, exercises, series, repetitions);
//   };

//   return (
//     <>
//       <Head>
//         <link
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
//           rel="stylesheet"
//           integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
//           crossorigin="anonymous"
//         />
//         <link
//           rel="icon"
//           type="image/x-icon"
//           href="https://www.flaticon.com/free-icons/gym"
//         ></link>
//         <title>Consultoria Fitness</title>
//       </Head>

//       <div className="container">
//         <Nav />

//         <button
//           type="button"
//           className="btn btn-primary mb-3 mt-3"
//           data-bs-toggle="modal"
//           data-bs-target="#AddClientModal"
//         >
//           <PlusLg />
//           Adicionar novo cliente
//         </button>

//         <div className="table-responsive">
//           <table className="table table-hover">
//             <thead>
//               <tr>
//                 <th>Nome</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {clientsList &&
//                 clientsList.map((client) => (
//                   <tr key={client.id}>
//                     <td>{client.name}</td>
//                     <td>
//                       <button
//                         className="btn btn-success btn-sm me-3"
//                         data-bs-toggle="modal"
//                         data-bs-target="#PreReadyWorkoutModal"
//                         onClick={() => HandleLoadTrainingToForm(client)}
//                       >
//                         Treino pré-pronto
//                       </button>
//                       <button
//                         type="button"
//                         class="btn btn-secondary btn-sm me-3"
//                         data-bs-toggle="modal"
//                         data-bs-target="#CustomWorkoutModal"
//                         onClick={() => HandleLoadTrainingToForm(client)}
//                       >
//                         Treino personalizado
//                       </button>
//                       <button
//                         type="button"
//                         class="btn btn-primary btn-sm"
//                         data-bs-toggle="modal"
//                         data-bs-target="#WorkoutExercisesModal"
//                         onClick={() => HandleLoadTrainingToForm(client)}
//                       >
//                         Exercícios do treino
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <AddClientModal
//         id="AddClientModal"
//         workoutsList={workoutsList}
//         GetClients={GetClients}
//       />

//       <PreReadyWorkoutModal
//         id="PreReadyWorkoutModal"
//         client={selectedClient}
//         workoutsList={workoutsList}
//       />

//       <CustomWorkoutModal id="CustomWorkoutModal" client={selectedClient} />

//       <WorkoutExercisesModal
//         id="WorkoutExercisesModal"
//         client={selectedClient}
//         selectedWorkout={selectedWorkout}
//         workoutHistory={workoutHistory}
//       />

//       <script
//         src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
//         integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
//         crossorigin="anonymous"
//       ></script>
//     </>
//   );
// };

// export default Index;

import db from '../db';

export default function Home(props) {
  const { rows } = props;

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {rows.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { rows } = await db.query('SELECT * FROM clients');

  return {
    props: {
      rows,
    },
  };
}
