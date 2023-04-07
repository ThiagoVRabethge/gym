import db from "./db";

const listWorkouts = async (req, res) => {
  try {
    const { rows } = await db.query(`SELECT * FROM workout`);
    res.status(200).send(rows);
  } catch (error) {
    res.status(500).send({error: error.message});
  };
};

export default listWorkouts;