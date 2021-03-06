import {UserWithPassword, VerifyUserPayload, VerifyUserResponse, User} from '../../types';
import { User as UserModel } from "@mystoreaid/prisma-models";
import { signToken } from '../../helpers';

export default async function verifyUser(parent: any, args: VerifyUserPayload, context: any): Promise<VerifyUserResponse> | never{
    let user: User;
    const {phone, otp} = args;

    try {
        user = await UserModel.findOneWhere({ AND: 
            [{ phone: phone }, {otp: otp} ]
        });

        if (!user) {
            throw new Error(`Wrong OTP. Please try again`);
        }

        const updatedUser: UserWithPassword = await UserModel.updateOne(user.userId, {
            status: 'confirmed'
        });

        if (updatedUser) {
            const token = signToken(updatedUser, 24 * 7, 'hours');

            return {token};
        }

        throw new Error(`Error updating user`);
    } catch (e) {
        throw new Error(`Could not verify user`);
    }
}
