const router = require('express-promise-router')();
const usersController = require('../controllers/users.controller');

// ==> Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/users
router.post('/users', usersController.createUsers);
// get
router.get('/users', usersController.userListar);

module.exports = router;