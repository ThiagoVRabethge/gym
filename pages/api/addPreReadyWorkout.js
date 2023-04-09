import db from "./db";

const addPreReadyWorkout = async (req, res) => {
  let date = new Date();
  let clientId = req.body.clientId;
  let workoutId = req.body.workoutId;

  try {
    const { rows } = db.query(
      `UPDATE clients SET workout_id = $1 WHERE client_id = $2`,
      [workoutId, clientId]
    );
  } catch (error) {
    res.status(500).send({ error: error.message });
  };

  try {
    const {rows} = db.query(
      `INSERT INTO workouts_history(date, client_id, workout_id) VALUES ($1, $2, $3)`,
      [date, clientId, workoutId]
    );

    res.status(200).send(rows);
  } catch (error) {
    res.status(500).send({error: error.message});
  };
};

export default addPreReadyWorkout;