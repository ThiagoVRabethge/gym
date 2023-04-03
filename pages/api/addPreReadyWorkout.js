import mysql from "mysql2/promise";

const addPreReadyWorkout = async (req, res) => {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  const selectedClient = req.body.selectedClient;
  const selectedWorkout = req.body.selectedWorkout;

  try {
    const values = [];
    const query = `UPDATE clients SET workout_id = ${selectedWorkout} WHERE client_id = ${selectedClient}`;
    const [data] = await dbconnection.execute(query, values);

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  };
};

export default addPreReadyWorkout;