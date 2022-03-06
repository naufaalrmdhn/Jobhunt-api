import express from "express";
import conn from "./config/connection.js";
import routerUser from "./routes/routerUser.js";
import MyModels from "./models/companyjobpost.js";
const JobPostActivity = MyModels.JobPostActivity;
// const Job = MyModels.Job
// const Company = MyModels.Company
import routerCompany from "./routes/routerCompany.js";
import routerJob from "./routes/routerJob.js";
const app = express();
const port = 3000;

try {
    conn.authenticate()
    console.log("Success connect database");
} catch (error) {
    console.log(error)
}

app.use(express.json());
app.use(routerUser);
app.use(routerCompany);
app.use(routerJob);
app.listen(port, () => {
    console.log(`Server run ${port}`)
})