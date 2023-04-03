import mysql from "mysql2/promise";

const addWorkout = async (req, res) => {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  let workoutName = req.body.workoutName;
  let exercises = req.body.exercises;
  let series = req.body.series;
  let repetitions = req.body.repetitions;
  let rest = req.body.rest;
  let observations = req.body.observations;

  try {
    const values = [];

    const [data] = await dbconnection.execute(
      `INSERT INTO workout(name, exercises, series, repetitions, rest, observations) values(?, ?, ?, ?, ?, ?)`,
      [workoutName, exercises, series, repetitions, rest, observations],
      values
    );

    res.status(200).send(data);

  } catch (error) {

    res.status(500).send(error.message);

  };
};

export default addWorkout;