import MyModels from '../models/companyjobpost.js';
const Company = MyModels.Company


export const getCompanies = async(req, res) => {
    try {
        const companies = await Company.findAll({
            attributes: ['id', 'company_name', 'profile_description', 'address']
        })
        res.json({ msg: companies });
    } catch (error) {
        console.log(error)
    }
}

export const createCompany = async(req, res) => {
    const { company_name, profile_description, address } = req.body;
    try {
        await Company.create({
            company_name: company_name,
            profile_description: profile_description,
            address: address
        })
        const company = await Company.findAll({
            attributes: ['id', 'company_name', 'profile_description', 'address']
        })
        res.json({ msg: company });

    } catch (error) {
        console.log(error);
    }

}

export const getCompanyById = async(req, res) => {
    try {
        const companyId = await Company.findByPk(req.params.id, {
            attributes: ['id', 'company_name', 'profile_description', 'address']
        });
        res.json({ msg: companyId })
    } catch (error) {
        console.log(error)
    }
}

export const updateCompanyById = async(req, res) => {
    try {
        const { company_name, profile_description, address } = req.body;
        const companyId = await Company.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'company_name', 'profile_description', 'address']

        })
        companyId.company_name = company_name;
        companyId.profile_description = profile_description;
        companyId.address = address;
        companyId.save();
        res.json({ msg: companyId })
    } catch (error) {
        console.log(error);
    }
}

export const deleteCompanyById = async(req, res) => {
    try {
        await Company.destroy({
            where: {
                id: req.params.id
            }
        })
        const company = await Company.findAll({
            attributes: ['id', 'company_name', 'profile_description', 'address']
        });
        res.json({ msg: company })
    } catch (error) {
        console.log(error)
    }
}