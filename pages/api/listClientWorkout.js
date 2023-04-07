import db from "./db";

const listClientWorkout = async (req, res) => {
  const {rows} = db.query(`SELECT * FROM workout`);

  res.status(200).send(rows);
};

export default listClientWorkout;

// import mysql from "mysql2/promise";

// const listClientWorkout = async (req, res) => {
//   const dbconnection = await mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     database: process.env.MYSQL_DATABASE,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//   });

//   const selectedClientWorkoutId = req.body.selectedClientWorkoutId;

//   try {
//     const query = `SELECT * FROM workout WHERE workout_id = ${selectedClientWorkoutId}`;
//     const values = [];
//     const [data] = await dbconnection.execute(query, values);
//     dbconnection.end();
//     res.status(200).send(data);
//   } catch (error) {
//     res.status(500).send({ error });
//   }

  // try {
  //   const query = `SELECT * FROM client_workout WHERE client_id = ${clientId} && workout_id = ${workoutId}`;
  //   const values = [];
  //   const [data] = await dbconnection.execute(query, values);

  //   const clientWorkoutList = data;
  //   let selectedWorkoutId = 0;

  //   {
  //     clientWorkoutList && clientWorkoutList.map((clientWorkout) => {
  //       selectedWorkoutId = clientWorkout.workout_id;
  //     });
  //   };

  //   const newQuery = `SELECT * FROM workout WHERE workout_id = ${selectedWorkoutId}`;
  //   const newValues = [];
  //   const [newData] = await dbconnection.execute(newQuery, newValues);

  //   dbconnection.end();
  //   res.status(200).send(newData);
  // } catch (error) {
  //   res.status(500).send({ error });
  // }
// };

// export default listClientWorkout;
