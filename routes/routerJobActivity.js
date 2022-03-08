import express from 'express';
const routerJobPostActivities = express.Router();

import { getJobPostActivities, createJobPostActivity, deleteJobPostActivityById } from '../controllers/JobPostActivity.js';
import { authMiddleware } from "../middleware/auth.js";
routerJobPostActivities.get('/job-post-activities', authMiddleware, getJobPostActivities);
routerJobPostActivities.post('/job-post-activities', authMiddleware, createJobPostActivity);
routerJobPostActivities.delete('/job-post-activities/:id', authMiddleware, deleteJobPostActivityById);

export default routerJobPostActivities;