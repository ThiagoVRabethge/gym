import mysql from "mysql2/promise";

const addCustomWorkout = async (req, res) => {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  let clientId = req.body.clientId;
  let name = req.body.name;
  let exercises = req.body.exercises;
  let series = req.body.series;
  let repetitions = req.body.repetitions;

  try { 
    const values = [];
    const [data] = await dbconnection.execute(`INSERT INTO workout(name, exercises, series, repetitions) VALUES(?, ?, ?, ?)`, [name, exercises, series, repetitions], values);

    let newWorkoutId = data.insertId;

    const newValues = [];
    const newData = await dbconnection.execute(`UPDATE clients SET workout_id = ${newWorkoutId} WHERE client_id = ${clientId}`, newValues);

    // const newValues = [];
    // const [newData] = await dbconnection.execute(`SELECT * FROM workout WHERE workout_id = ${newWorkoutId}`, newValues);

    res.status(200).send(newData);
  } catch (error) {
    res.status(500).send({ error });
  };
};

export default addCustomWorkout;