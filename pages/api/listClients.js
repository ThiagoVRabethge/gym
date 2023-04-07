import db from "./db";

const listClients = async(req, res) => {
  const { rows } = await db.query('SELECT * FROM clients');
  res.status(200).send(rows);
};

export default listClients;