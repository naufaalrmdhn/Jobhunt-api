import { Sequelize } from 'sequelize';
import conn from '../../config/connection.js';
const { DataTypes } = Sequelize;

const userDetails = conn.define('userDetails', {
    age: {
        type: DataTypes.TINYINT
    },
    sex: {
        type: DataTypes.ENUM('m', 'f', 'n')
    },
    city: {
        type: DataTypes.STRING
    }
})

export default userDetails;