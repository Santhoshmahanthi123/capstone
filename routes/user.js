const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const UserController = require('../controllers/user');

router.get('/',UserController.users_get_all);

router.get('/:userId',checkAuth,UserController.users_get);

router.post('/signup',UserController.user_signup);

router.post('/login',UserController.user_login);

router.delete('/:userId',checkAuth,UserController.user_delete);

module.exports = router;