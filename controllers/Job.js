import MyModels from "../models/companyjobpost.js";
const Job = MyModels.Job
const Company = MyModels.Company



export const createJob = async(req, res) => {
    try {
        const { title, companyId, address, job_description } = req.body
        const job = await Job.create({
            title: title,
            companyId: companyId,
            address: address,
            job_description: job_description
        })
        res.json({ msg: job })
    } catch (error) {
        console.log(error);
    }
}

export const getJobs = async(req, res) => {
    try {

        const jobs = await Job.findAll({
            attributes: ['id', 'title', 'companyId', 'address', 'job_description'],
            include: {
                model: Company,
                attributes: ['company_name', 'address']
            }
        });
        res.json({ msg: jobs })
    } catch (error) {
        console.log(error);
    }
}

export const getJobPostById = async(req, res) => {
    const jobPost = req.params.id
    try {
        const jobFind = await Job.findByPk(jobPost, {
            attributes: ['id', 'title', 'address', 'job_description']
        })
        if (!jobFind) return res.json({ msg: "not found" })
        res.json({ msg: jobFind })
    } catch (error) {
        console.log(error)
    }
}

export const updateJobPostById = async(req, res) => {
    const { title, companyId, address, job_description } = req.body;
    try {
        const jobUpdate = await Job.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'title', 'companyId', 'address', 'job_description']
        })

        jobUpdate.title = title
        jobUpdate.companyId = companyId
        jobUpdate.address = address
        jobUpdate.job_description = job_description
        jobUpdate.save()

        res.json({ msg: jobUpdate })
    } catch (error) {
        console.log(error)
    }

}

export const deleteJobPostById = async(req, res) => {
    try {
        const deleteJobPost = await Job.destroy(req.params.id);
        if (!deleteJobPost) return res.json({ msg: 'not found' })
        const updateJobPost = await Job.findAll({
            attributes: ['id', 'title', 'companyId', 'address', 'job_description']
        })
        res.json({ msg: updateJobPost })
    } catch (error) {
        console.log(error)
    }
}