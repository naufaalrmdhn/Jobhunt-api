import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from '../models/user/Users.js';


//user register
export const Register = async(req, res) => {
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        try {
            await Users.create({
                username: username,
                email: email,
                password: hashPassword
            })
            res.json({ Msg: "User created!" })
        } catch (error) {
            console.log(error)
        }
    }
    // end user register

//user login
export const Login = async(req, res) => {
        try {
            const user = await Users.findAll({
                where: {
                    email: req.body.email
                }
            });
            const match = await bcrypt.compare(req.body.password, user[0].password);
            if (!match) return res.status(400).json({ msg: "Wrong Password" });
            const userId = user[0].id;
            const username = user[0].username;
            const email = user[0].email;
            const accessToken = jwt.sign({ userId, username, email }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1h'
            });
            const refreshToken = jwt.sign({ userId, username, email }, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: '1d'
            })
            await Users.update({ refresh_token: refreshToken }, {
                where: {
                    id: userId
                }
            });
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            });
            res.json({ accessToken });
        } catch (error) {
            res.status(404).json({ msg: "email not found" });
        }
    }
    //end user login

//get all users
export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'username', 'email']
        })
        res.json({ msg: users })
    } catch (error) {
        console.log(error)
    }
}

//get user by id
export const getUserById = async(req, res) => {
    try {
        const userId = await Users.findByPk(req.params.id, {
            attributes: ['id', 'username', 'email']
        })
        res.json({ msg: userId })
    } catch (error) {
        res.sendStatus(500);
    }
}

//update user by id
export const updateUserById = async(req, res, next) => {
    try {
        const { username, email } = req.body
        const id = await Users.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'username', 'email']
        })

        id.username = username
        id.email = email
        id.save()

        res.json({ msg: id })
    } catch (error) {
        next(error);
    }
}

//dlete user by id
export const deleteUserById = async(req, res) => {
    try {
        await Users.destroy({
            where: {
                id: req.params.id
            }
        })
        const user = await Users.findAll({ attributes: ['id', 'username', 'email'] })
        res.json({ msg: user })
    } catch (error) {
        res.sendStatus(500, error)
    }
}