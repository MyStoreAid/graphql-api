import CompanyModel from "../CompanyModel";
import { Company } from "../types";

export default async function updateCompany(parent: any, args: Company, context: any): Promise<Company> | never {
    let existingCompany!: Company;
    const companyId: string = args.id;
    
    try {
        existingCompany = await CompanyModel.findOne(context.prisma.companies, companyId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Companys with ID ${companyId}`);
    }

    if(!existingCompany) {
        throw new Error(`There is no Company with ID ${companyId}`);
    }

    const data = {
        name: args.name,
        adminLastModifiedBy: args.adminLastModifiedBy ? { connect: {id : args.adminLastModifiedBy}} : existingCompany.adminLastModifiedBy,
        lastSyncBy: args.lastSyncBy ? { connect: {id: args.lastSyncBy}} : existingCompany.lastSyncBy

    }

    return CompanyModel.updateOne(context.prisma.companies, companyId, data);


}