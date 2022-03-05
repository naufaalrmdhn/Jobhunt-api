import { Sequelize } from "sequelize";
import conn from "../config/connection.js";
const { DataTypes } = Sequelize;

const Company = conn.define('company', {
    company_name: {
        type: DataTypes.STRING
    },
    profile_description: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    }
})

export default Company;