import { Sequelize } from 'sequelize';

const conn = new Sequelize('jobs', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

export default conn