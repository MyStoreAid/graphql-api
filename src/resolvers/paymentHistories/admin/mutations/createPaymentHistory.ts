import { CreatePaymentHistoryArgs, PaymentHistory } from "../../../../resolvers/paymentHistories/types";
import { PaymentHistory as PaymentHistoryModel, UserBranch as UserBranchModel } from "@mystoreaid/prisma-models";

export default async function createPaymentHistory (parent: any, args: CreatePaymentHistoryArgs): Promise<PaymentHistory> | never {
    const userId: string = args.userId;
    const branchId: string = args.branchId;
    const companyId: string = args.companyId;
    const paymentHistoryInfo: any = JSON.parse(JSON.stringify(args.paymentHistoryInfo));

    try {
        const condition: any = { AND: [ { userId: userId }, { companyId: companyId }, { branchId: branchId } ] };
        const existingBranch = await UserBranchModel.findOneWhere(condition);
        if (existingBranch) {
            paymentHistoryInfo.branches = { connect: { branchId: branchId } };
            delete paymentHistoryInfo.branchId;
            const include: any = { branches: true};
            const data: any = {data: paymentHistoryInfo, include: include};

            const paymentHistories: PaymentHistory = await PaymentHistoryModel.createOneForeignKey(data);
            return paymentHistories;
        }
        else {
            throw new Error (`There exists no Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`);
        }
    }
    catch(error: any) {
        throw new Error (`There was an error finding Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`)
    }
}