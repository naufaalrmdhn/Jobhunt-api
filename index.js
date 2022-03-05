import express from "express";
import conn from "./config/connection.js";
import routerUser from "./routes/routerUser.js";
import Job from "./models/jobs.js";
import Company from "./models/company.js";
import routerCompany from "./routes/routerCompany.js";
const app = express();
const port = 3000;

try {
    conn.authenticate()
    console.log("Success connect database")
        //await Users.sync();
        //await userDetails.sync();
        //await Company.sync();
        // await Job.sync();
} catch (error) {
    console.log(error)
}

app.use(express.json());
app.use(routerUser);
app.use(routerCompany);
app.listen(port, () => {
    console.log(`Server run ${port}`)
})