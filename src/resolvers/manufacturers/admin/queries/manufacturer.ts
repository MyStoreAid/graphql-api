import { ManufacturerIdArgs, Manufacturer } from "../../types";
import ManufacturerModel from "../../../../resolvers/manufacturers/ManufacturerModel";

export default async function manufacturer (parent: any, args: ManufacturerIdArgs): Promise<Manufacturer> | never {
    let result!: Manufacturer;
    const manufacturerId: string = args.id;

    try {
        result = await ManufacturerModel.findOne(manufacturerId);
    } catch (error: unknown) {
        new Error(`There was an error getting Manufacturer with ID ${manufacturerId}.`);
    }

    if (!result) {
        new Error(`There is no Manufacturer with ID ${manufacturerId}.`);
    }

    return result;

}