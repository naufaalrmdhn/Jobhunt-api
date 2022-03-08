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

const JobPostActivity = conn.define('job_post_activities', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    },
    jobPostId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'job_posts',
            key: 'id'
        }
    }
})

Job.belongsTo(Company)
JobPostActivity.belongsTo(Users)
JobPostActivity.belongsTo(Job)
export default {
    Company,
    Job,
    JobPostActivity
}