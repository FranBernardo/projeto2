const db = require('../config/database');

exports.createUsers = async (req, res) => {
    const { last_name, first_name, email, password } = req.body;
    try{
    const { rows } = await db.query(
        "INSERT INTO users ( last_name, first_name, email, password) VALUES ($1, $2, $3, $4)",
        [ last_name, first_name, email, password]
    );
    
    res.status(201).send({
        message: "usuario add sucesso!!", 
        body: {
            users: { last_name, first_name, email, password}
        },
    });
}catch (error) {
    console.error('users', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//litar dados
exports.userListar = async (req, res) => {
    try {
      const { rows } = await db.query(`SELECT * FROM USERS`);
      res.status(200).send(rows);
    } catch (error) {
      console.error('userListar', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };