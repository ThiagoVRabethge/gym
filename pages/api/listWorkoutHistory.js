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

  } catch (error) {
    res.status(500).send({error: error.message});
  };

  try {
    const query = `SELECT * FROM workout WHERE workout_id = ${selectedWorkoutId}`;
    const values = [];

    const [data] = await dbconnection.execute(query, values);

    let workoutHistory = {
      date: workoutDate,
      name: "",
      exercises: "",
      series: "",
      repetitions: "",
      rest: "",
      observations: "",
    };

    data &&
      data.map((data) => {
        workoutHistory.name = data.name;
        workoutHistory.exercises = data.exercises;
        workoutHistory.series = data.series;
        workoutHistory.repetitions = data.repetitions;
        workoutHistory.rest = data.rest;
        workoutHistory.observations = data.observations;
      });

    dbconnection.end();

    res.status(200).send(workoutHistory);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default listWorkoutHistory;