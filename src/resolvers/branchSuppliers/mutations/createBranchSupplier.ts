import { BranchSupplier } from '../types';
import BranchSupplierModel from '../BranchSupplierModel';
import { Branch } from '../../../resolvers/branches/types';
import BranchModel from '../../../resolvers/branches/BranchModel';
import { User } from '../../../resolvers/users/types';
import UserModel from '../../../resolvers/users/UserModel';



export default async function createBranchSupplier (parent: any, args: BranchSupplier, context: any): Promise<BranchSupplier> | never {
    let existingBranch: Branch;
    let existingUser: User;
    const branchId: string = args.branchId;
    const userId: string = args.createdBy;
    try {
        existingBranch = await BranchModel.findOne(context.prisma.branches, branchId);
    }
    catch(error: any) {
        throw new Error(`There was an error finding Branch with Branch ID ${branchId}`)
    }

    try {
        existingUser = await UserModel.findOneWhere(context.prisma.users, { userId: userId });
    }
    catch(error: any) {
        throw new Error(`There was an error finding User with User ID ${userId}`)
    }
  
    if (existingBranch && existingUser) {
        const data = {
            data: {                                                                            
                deliveryDays: args.deliveryDays,                                                                           
                supplierId: args.supplierId,                                     
                branchName: existingBranch.name,                                       
                branchContact: args.branchContact,                                       
                lastModifiedBy: args.lastModifiedBy,
                branches: { connect: { id: args.branchId} }, 
                users_branch_suppliers_createdByTousers: { connect: { userId: args.createdBy} }                               
            },

            include: {
                branches: true,
                users_branch_suppliers_createdByTousers: true,
            }
        }

        
        
        return BranchSupplierModel.createOneForeignKey(context.prisma.branch_suppliers, data);
    }

    throw new Error(`Branch ID and createdBy ID required!`);
}