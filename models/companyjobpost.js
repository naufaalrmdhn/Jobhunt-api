import { Sequelize } from "sequelize";
import conn from "../config/connection.js";
import Users from "./user/Users.js";

const { DataTypes } = Sequelize;

const Company = conn.define('companies', {
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

const Job = conn.define('job_posts', {
    title: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    job_description: {
        type: DataTypes.TEXT
    }
})



Job.belongsTo(Company)

export default {
    Company,
    Job
}