import { BranchSupplierSalesperson } from '../../types';
import { BranchSupplierSalesperson as BranchSupplierSalespersonModel} from "@mystoreaid/prisma-models";

export default async function createBranchSupplierSalesperson (parent: any, args: BranchSupplierSalesperson): Promise<BranchSupplierSalesperson> {
    const data = {
        data: {                                                                         
            employeeId: args.employeeId,                                     
            employeeName: args.employeeName,                                       
            employeeContact: args.employeeContact,                                       
            lastModifiedBy: args.lastModifiedBy,
            branches: { connect: { id: args.branchId} }, 
            branch_suppliers: { connect: { id: args.branchSupplierId}},
            users_branch_supplier_salespersons_createdByTousers: { connect: { userId: args.createdBy}}                                    
        },

        include: {
            branches: true,
            branch_suppliers: true,
            users_branch_supplier_salespersons_createdByTousers: true,
        }
    }

    
    
    return BranchSupplierSalespersonModel.createOneForeignKey(data);
}