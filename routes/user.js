const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.get('/',UserController.users_get);

router.post('/signup',UserController.user_signup);

router.delete('/:userId',UserController.user_delete);

module.exports = router;