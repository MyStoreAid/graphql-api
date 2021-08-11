import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export default  async function createBrand (parent: any, args: any, context: any) {
    return await context.prisma.brand.create({
        data: {
            id: uuidv4(),
            name: args.name,
            created_at: moment().toDate().getTime(),
            updated_at: moment().toDate().getTime(),
            last_modified: moment().toDate().getTime(),
            server_created_at: moment().toDate().getTime(),
        }
    });
}