import { Sequelize } from 'sequelize';
import conn from '../config/connection.js';
const { DataTypes } = Sequelize;

const Job = conn.define('job_post', {
    title: {
        type: DataTypes.STRING
    },
    company_id: {
        type: DataTypes.INTEGER
    },
    address: {
        type: DataTypes.STRING
    },
    job_description: {
        type: DataTypes.TEXT
    }
})

export default Job