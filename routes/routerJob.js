import express from 'express';
const routerJob = express.Router();

import { createJob, deleteJobPostById, getJobPostById, getJobs, updateJobPostById } from '../controllers/User/Job.js';

routerJob.post('/jobs', createJob);
routerJob.get('/jobs', getJobs);
routerJob.put('/jobs/:id', updateJobPostById);
routerJob.get('/job/:id', getJobPostById);
routerJob.delete('/job/:id', deleteJobPostById);

export default routerJob