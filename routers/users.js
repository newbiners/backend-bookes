const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const User = require('../api/models/users');
const Register = require('../controllers/register');
const Login = require('../controllers/login');
const CekUSer = require('../controllers/cek-user');
const DataUser = require('../controllers/user');


route.get('/',CekUSer,DataUser)
route.post('/register', Register);
route.post('/login', Login);
module.exports = route;