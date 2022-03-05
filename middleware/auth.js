import basicAuth from 'express-basic-auth';
import db from '../config/connection.js';
import Users from '../models/user/Users.js';

export const myAuth = async(req, res, next) => {
    const user = await Users.findAll();
    const email = user[0].email;
    const password = user[0].password;
    basicAuth({
        users: { "men@gmail.com": "123" }
    })
}