import { Branch } from "../types";
import BranchModel from "../BranchModel";

export default async function branches (parent: any, args: Branch, context: any): Promise<Branch[]> {

    const data = {             
        appointments: true,
        branch_user_groups: true,
        business_categories: true,
        companies: true,
        users: true,}
    
    return await BranchModel.findManyForeignKey(context.prisma.branches, data);
}