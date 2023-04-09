import db from "./db";

const addClient = async (req, res) => {
  let date = new Date();
  let clientId = 0;
  let name = req.body.name;
  let email = req.body.email;
  let mobile = req.body.mobile;
  let workoutId = req.body.workoutId;

  try {
    const { rows } = await db.query(
      `INSERT INTO clients(name, email, mobile, workout_id) VALUES($1, $2, $3, $4)`,
      [name, email, mobile, workoutId],
    );
  } catch (error) {
    res.status(500).send({ error: error.message });
  };

  try {
    const { rows } = await db.query(
      `SELECT * FROM clients ORDER BY client_id DESC LIMIT 1`
    );

    rows && rows.map((rows) => {
      clientId = rows.client_id;
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  };

  try {
    const {rows} = db.query(
      `INSERT INTO workouts_history(date, client_id, workout_id) VALUES ($1, $2, $3)`,
      [date, clientId, workoutId]
    );

    res.status(200).send(rows);
  } catch (error) {
    res.status(500).send({error: error.message});
  };
};

export default addClient;