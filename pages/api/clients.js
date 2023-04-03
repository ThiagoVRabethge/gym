import mysql from "mysql2/promise";

const clients = async (req, res) => {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    const query = "SELECT * FROM clients";
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
};

export default clients;