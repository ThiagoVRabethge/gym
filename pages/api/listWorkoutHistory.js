import mysql from "mysql2/promise";

const listWorkoutHistory = async (req, res) => {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  let clientId = req.body.clientId;
  let selectedWorkoutId = 0;
  let workoutDate = 0;

  try {
    const query = `SELECT * FROM workouts_history WHERE client_id = ${clientId}`;
    const values = [];

    const [data] = await dbconnection.execute(query, values);

    data.map((data) => {
      selectedWorkoutId = data.workout_id;
      workoutDate = data.date;
    });
  } catch (error) {
    res.status(500).send(error);
  }

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