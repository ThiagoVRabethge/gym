// import mysql from "mysql2/promise";

// const addClient = async (req, res) => {
//   const dbconnection = await mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     database: process.env.MYSQL_DATABASE,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//   });

//   let name = req.body.name;
//   let email = req.body.email;
//   let mobile = req.body.mobile;
//   let workoutId = req.body.workoutId;

//   try {
//     const values = [];
    
//     const [data] = await dbconnection.execute(
//       `INSERT INTO clients(name, email, mobile, workout_id) VALUES(?, ?, ?, ?)`,
//       [name, email, mobile, workoutId],
//       values
//     );

//     let date = new Date();
//     let clientId = data.insertId;

//     const newValues = [];
    
//     const [newData] = await dbconnection.execute(
//       `INSERT INTO workouts_history(date, client_id, workout_id) VALUES(?, ?, ?)`,
//       [date, clientId, workoutId],
//       newValues
//     );

//     res.status(200).send(newData);

//     dbconnection.end();
//   } catch (error) {
//     res.status(500).send({ error });
//   }
// };

// export default addClient;

import db from "./db";

const addClient = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let mobile = req.body.mobile;
  let workoutId = req.body.workoutId;

  const insertQuery = 'INSERT INTO clients (name, email, mobile, workout_id) VALUES (?, ?, ?, ?)';
  const values = [name, email, mobile, workoutId];
  
  const { rows  } = db.query(insertQuery, values);

  res.status(200).send(rows);
};

export default addClient;