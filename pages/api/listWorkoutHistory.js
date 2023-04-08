import db from "./db";

const listWorkoutHistory = async (req, res) => {
  try {
    let clientId = req.body.clientId;

    let history = {
      dates: [],
      workoutsIds: [],
    };

    const { data } = await db.query(`SELECT * FROM workouts_history WHERE client_id = ${clientId}`);

    data && data.map((data) => {
      history.dates.push({ date: data.date });
      history.workoutsIds.push({ workoutId: data.workout_id });
    });

    res.status(200).send(history);
  } catch (error) {
    res.status(500).send({ error: error.message });
  };
};

export default listWorkoutHistory;