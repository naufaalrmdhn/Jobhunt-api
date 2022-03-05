import express from 'express';
const routerCompany = express.Router();

import { getCompanies, createCompany, updateCompanyById, getCompanyById, deleteCompanyById } from '../controllers/User/Company.js';

routerCompany.get('/company', getCompanies);
routerCompany.post('/company', createCompany);
routerCompany.put('/company/:id', updateCompanyById);
routerCompany.get('/company/:id', getCompanyById);
routerCompany.delete('/company/:id', deleteCompanyById);

export default routerCompany;