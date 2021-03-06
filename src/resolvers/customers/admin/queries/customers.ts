import { Customer } from "../../types";
import { Customer as CustomerModel } from "@mystoreaid/prisma-models";

export default async function customers (parent: any, args: Customer, context: any): Promise<Customer[]> {

    const data = { 
        users_customers_createdByTousers: true,
        users_customers_lastModifiedByTousers: true,
        branches_customers: true,
        sale_entries: true,
        sale_installments: true,
        sales: true,
    }
    
    return await CustomerModel.findManyForeignKey(data);
}