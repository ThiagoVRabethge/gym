import postCustomWorkout from "@/requests/workouts/postCustomWorkout";

const CustomWorkoutModal = (props) => {
  const id = props.id;
  const client = props.client;

  const HandleAddCustomWorkout = (e) => {
    let clientId = client.client_id;
    let name = e.target[0].value;
    let exercises = e.target[1].value;
    let series = e.target[2].value;
    let repetitions = e.target[3].value;

    postCustomWorkout(clientId, name, exercises, series, repetitions);
  };

  return (
    <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Criar treino personalizado para {client.name}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={(e) => HandleAddCustomWorkout(e)}>
            <div className="modal-body">
              <div className="mb-3">
                <input type="text" placeholder="Nome" className="form-control" />
              </div>
              <div className="mb-3">
                <input type="text" placeholder="Exercícios" className="form-control" />
              </div>
              <div className="mb-3">
                <input type="text" placeholder="Séries" className="form-control" />
              </div>
              <div className="mb-3">
                <input type="text" placeholder="Repetições" className="form-control" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
              <button type="submit" className="btn btn-success">Concluir</button>
            </div>
          </form>
        </div>
      </div>
    </div>    
  );
};

export default CustomWorkoutModal;