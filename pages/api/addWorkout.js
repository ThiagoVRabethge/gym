import db from "./db";

const addWorkout = async (req, res) => {
  try {
    let name = req.body.name;
    let exercises = req.body.exercises;
    let series = req.body.series;
    let repetitions = req.body.repetitions;
    let rest = req.body.rest;
    let observations = req.body.observations;

    const values = [];

    const rows = await db.query(
      `INSERT INTO workout(name, exercises, series, repetitions, rest, observations) VALUES($1, $2, $3, $4, $5, $6)`,
      [name, exercises, series, repetitions, rest, observations],
      values
    );

    res.status(200).send(rows);
  } catch (error) {
    res.status(500).send({error: error.message});
  };
};

export default addWorkout;