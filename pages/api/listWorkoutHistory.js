import db from "./db";

const listWorkoutHistory = async (req, res) => {
  let clientId = req.body.clientId;
  let selectedWorkoutId = 0;
  let workoutDate = 0;

  try {
    const { rows } = await db.query(`SELECT * FROM workouts_history WHERE client_id = ${clientId}`);

    rows && rows.map((rows) => {
      selectedWorkoutId = rows.workout_id;
      workoutDate = rows.date;
    });

    res.status(200).send(selectedWorkoutId);
  } catch (error) {
    res.status(500).send({error: error.message});
  };
};

export default listWorkoutHistory;