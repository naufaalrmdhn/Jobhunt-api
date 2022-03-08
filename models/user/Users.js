import { QueryInterface, Sequelize } from 'sequelize';
import conn from '../../config/connection.js';
const { DataTypes } = Sequelize;

const Users = conn.define('users', {
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.STRING
    }
})



export default Users;