import postPreReadyWorkout from "@/requests/workouts/postPreReadyWorkout";
import server from "@/services/server";

const Modal = (props) => {
  const id = props.id;
  const client = props.client;
  const workoutsList = props.workoutsList;

  const HandleAddPreReadyWorkout = (e) => {
    let selectedClient = client.client_id;
    let selectedWorkout = e.target[0].value;

    server
      .post("/api/addPreReadyWorkout", {
        clientId: selectedClient,
        workoutId: selectedWorkout,
      })
      .then((response) => console.info(response));
  };

  return (
    <>
      <div
        className="modal fade"
        id={id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Selecionar treino pré-pronto para {client.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={(e) => HandleAddPreReadyWorkout(e)}>
              <div className="modal-body">
                <div className="mb-3">
                  <select className="form-control">
                    {workoutsList && workoutsList.map((workout) => (
                      <option key={workout.workout_id} value={workout.workout_id}>
                        {workout.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-success">
                  Concluir
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
