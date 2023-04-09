import db from "./db";

const listWorkoutHistory = async (req, res) => {
  let workoutHistory = {
    selectedDate: [],
    selectedWorkouts: [],
  };

  let selectedWorkoutId = [];

  try {
    let clientId = req.body.clientId;

    const { rows } = await db.query(`SELECT * FROM workouts_history WHERE client_id = $1`, [clientId]);

    rows && rows.map((rows) => {
      workoutHistory.selectedDate.push({ date: rows.date });
      selectedWorkoutId.push({ workoutId: rows.workout_id });
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  };

  try {
    const stringIds = selectedWorkoutId.map((id) => `${id.workoutId}`);

    const query = `SELECT * FROM workout WHERE workout_id IN (${stringIds.join(',')})`;

    const { rows } = await db.query(query);

    workoutHistory.selectedWorkouts.push({workouts: rows});

    res.status(200).send(workoutHistory);
  } catch (error) {
    res.status(500).send({ error: error.message });
  };
};

export default listWorkoutHistory;