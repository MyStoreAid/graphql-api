import Model from "../../models/Model";

export default class SaleModel extends Model {
    static get timestampFields(): string[] {
        return [
            'salesDate',
            'created_at',
            'updated_at',
            'server_created_at',
            'last_modified'
        ];
    }
}