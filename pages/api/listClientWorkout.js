import db from "./db";

const listWorkouts = async (req, res) => {
  try {
    let clientWorkoutId = req.body.clientWorkoutId;

    const { rows } = await db.query(`SELECT * FROM workout WHERE workout_id = ${clientWorkoutId}`);

    res.status(200).send(rows);
  } catch (error) {
    res.status(500).send({error: error.message});
  };
};

export default listWorkouts;