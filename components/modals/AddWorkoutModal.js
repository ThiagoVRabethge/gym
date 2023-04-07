import postWorkout from "@/requests/workouts/postWorkout";
import server from "@/services/server";

const AddWorkoutModal = (props) => {
  const id = props.id;

  const HandleAddWorkout = (e) => {
    e.preventDefault();

    let name = document.getElementById("workoutName").value;
    let exercises = document.getElementById("exercises").value;
    let series = document.getElementById("series").value;
    let repetitions = document.getElementById("repetitions").value;
    let rest = document.getElementById("rest").value;
    let observations = document.getElementById("observations").value;

    server
      .post("api/addWorkout", {
        name: name,
        exercises: exercises,
        series: series,
        repetitions: repetitions,
        rest: rest,
        observations: observations,
      })
      .then(() => {
        props.GetWorkouts();
      });
  };

  return (
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
              Criar novo treino
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={(e) => HandleAddWorkout(e)}>
            <div className="modal-body">
              <div className="mb-3">
                <input
                  type="text"
                  id="workoutName"
                  placeholder="Nome"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="exercises"
                  placeholder="Exercícios"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="series"
                  placeholder="Séries"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="repetitions"
                  placeholder="Repetições"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="rest"
                  placeholder="Descanso"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="observations"
                  placeholder="Observações"
                  className="form-control"
                />
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
              <button
                type="submit"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Concluir
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddWorkoutModal;
