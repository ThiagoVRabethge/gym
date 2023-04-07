import db from "./db";

const addClient = async (req, res) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let workoutId = req.body.workoutId;

    const values = [];

    const { rows } = await db.query(
      `INSERT INTO clients(name, email, mobile, workout_id) VALUES($1, $2, $3, $4)`, 
      [name, email, mobile, workoutId], 
      values
    );
  
    res.status(200).send(rows);
  } catch (error) {
    res.status(500).send({error: error.message});
  };
};

export default addClient;