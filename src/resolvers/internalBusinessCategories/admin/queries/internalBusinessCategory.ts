import { InternalBusinessCategoryIdArgs, InternalBusinessCategory } from "../../types";
import { InternalBusinessCategory as InternalBusinessCategoryModel } from "@mystoreaid/prisma-models";

export default async function internalBusinessCategory (parent: any, args: InternalBusinessCategoryIdArgs, context: any): Promise<InternalBusinessCategory> | never {
    let result!: InternalBusinessCategory;
    const internalBusinessCategoryId: string = args.id;

    try {
        result = await InternalBusinessCategoryModel.findOne(internalBusinessCategoryId);
    } catch (error: unknown) {
        new Error(`There was an error getting InternalBusinessCategory with ID ${internalBusinessCategoryId}.`);
    }

    if (!result) {
        new Error(`There is no InternalBusinessCategory with ID ${internalBusinessCategoryId}.`);
    }

    return result;

}