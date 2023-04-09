const WorkoutExercisesModal = (props) => {
  const id = props.id;
  const client = props.client;
  const exercisesList = props.exercisesList;
  const selectedWorkout = props.selectedWorkout;
  const clientMail = client.email;
  const action = `https://formsubmit.co/${clientMail}`;
  const workoutHistory = props.workoutHistory;

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
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Histórico de treinos de {client.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Exercícios</th>
                      <th>Séries</th>
                      <th>Repetições</th>
                      <th>Descanso</th>
                      <th>Observações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workoutHistory.selectedWorkouts && workoutHistory.selectedWorkouts.map((history) => (
                      history.workouts && history.workouts.map((newHistory) => (
                        <>
                          <tr>
                            <td>
                              {newHistory.name}
                            </td>
                            <td>
                              {newHistory.exercises}
                            </td>
                            <td>
                              {newHistory.series}
                            </td>
                            <td>
                              {newHistory.repetitions}
                            </td>
                            <td>
                              {newHistory.rest}
                            </td>
                            <td>
                              {newHistory.observations}
                            </td>
                          </tr>
                        </>
                      ))
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Entendido
              </button>
              <form action={action} method="POST">
                {selectedWorkout &&
                  selectedWorkout.map((workout) => (
                    <>
                      <input type="hidden" value={workout.name} name="Nome" />
                      <input
                        type="hidden"
                        value={workout.exercises}
                        name="Exercícios"
                      />
                      <input
                        type="hidden"
                        value={workout.series}
                        name="Séries"
                      />
                      <input
                        type="hidden"
                        value={workout.repetitions}
                        name="Repetições"
                      />
                      <input
                        type="hidden"
                        value={workout.rest}
                        name="Descanso"
                      />
                      <input
                        type="hidden"
                        value={workout.observations}
                        name="Observações"
                      />
                      <input
                        type="hidden"
                        name="_subject"
                        value="Seu treino acabou de chegar em sua caixa de entrada!"
                      />
                      <input
                        type="hidden"
                        name="_next"
                        value="https://gym-nu-lyart.vercel.app/"
                      />
                    </>
                  ))}
                <button type="submit" className="btn btn-primary">
                  Enviar treino via gmail
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutExercisesModal;
