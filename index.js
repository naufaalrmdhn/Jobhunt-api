import express from "express";
import conn from "./config/connection.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import myModels from "./models/companyjobpost.js";
const jobpost = myModels.JobPostActivity;
import routerUser from "./routes/routerUser.js";
import routerCompany from "./routes/routerCompany.js";
import routerJob from "./routes/routerJob.js";
import routerJobPostActivities from "./routes/routerJobActivity.js";

const app = express();
const port = 3000;

// try connect to database
try {
    conn.authenticate()
    console.log("Success connect database");
    //await jobpost.sync();
} catch (error) {
    console.log(error)
}


//config
dotenv.config();
app.use(cookieParser())
app.use(express.json());

//routing use
app.use(routerUser);
app.use(routerCompany);
app.use(routerJob);
app.use(routerJobPostActivities);


app.listen(port, () => {
    console.log(`Server run ${port}`)
})