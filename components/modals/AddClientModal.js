import Head from "next/head";
import postClient from "../../requests/clients/postClient";
import server from "@/services/server";

const AddClientModal = (props) => {
  const id = props.id;
  const workoutsList = props.workoutsList;

  const HandleAddNewClient = (e) => {
    e.preventDefault();

    let name = e.target[0].value;
    let email = e.target[1].value;
    let mobile = e.target[2].value;
    let workoutId = e.target[3].value;

    server
      .post("api/addClient", {
        name: name,
        email: email,
        mobile: mobile,
        workoutId: workoutId,
      })
      .then(() => {
        props.GetClients();
      });
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
      </Head>
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
                Cadastrar novo cliente
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={(e) => HandleAddNewClient(e)}>
              <div className="modal-body">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Celular"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <select class="form-control">
                    {workoutsList && workoutsList.map((workout) => (
                      <option key={workout.workout_id} value={workout.workout_id}>{workout.name}</option>
                    ))}
                    </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
                <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
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

export default AddClientModal;