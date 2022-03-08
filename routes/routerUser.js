import express from 'express';
import basicAuth from 'express-basic-auth';
import Users from '../models/user/Users.js';
const routerUser = express.Router();

import { Register, Login, getUsers, getUserById, updateUserById, deleteUserById } from '../controllers/User.js';


routerUser.post('/user/register', Register); //register user
routerUser.post('/user/login', Login); //login user
routerUser.get('/user', getUsers); //get users
routerUser.get('/user/:id', getUserById); //get user by id
routerUser.put('/user/:id', updateUserById); //update user by id
routerUser.delete('/user/:id', deleteUserById); //delete user by id

export default routerUser;