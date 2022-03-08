import MyJobPostModel from '../models/companyjobpost.js';
const JobPostActivity = MyJobPostModel.JobPostActivity;
const JobPost = MyJobPostModel.Job;
import Users from "../models/user/Users.js";

export const getJobPostActivities = async(req, res) => {
    try {
        const jobActivities = await JobPostActivity.findAll({
            attributes: ['id'],
            include: [{
                    model: Users,
                    attributes: ['username', 'email']

                },
                {
                    model: JobPost,
                    attributes: ['title', 'job_description']
                }
            ]



        })
        res.json({ msg: jobActivities })
    } catch (error) {
        console.log(error);
    }
}

export const createJobPostActivity = async(req, res) => {
    try {
        await JobPostActivity.create({
            userId: req.body.userId,
            jobPostId: req.body.jobPostId
        })
        res.send("OK")
    } catch (error) {
        console.log(error);
    }
}

export const deleteJobPostActivityById = async(req, res) => {
    try {
        const deleteJobPostActivity = await JobPostActivity.destroy(req.params.id);
        if (!deleteJobPostActivity) return res.json({ msg: 'not found' })
        res.json({ msg: "success delete" })
    } catch (error) {
        console.log(error)
    }
}