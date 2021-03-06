import { UserIdArgs, User} from '../../types';
import { User as UserModel } from "@mystoreaid/prisma-models";
import generateOtp from '../../helpers/generateOtp';
import SMSService from '../../../../services/SMSService';



export default async function resendOtp(parent: any, args: UserIdArgs): Promise<String> | never{
    let user: User; 
    
    if (args.userId) {
        user = await UserModel.findOneWhere({ userId: args.userId });
        
        if (user) {
            const otp: String = process.env.NODE_ENV === 'test' ? '8989' : generateOtp();
            const message: String = `Hello ${ user.firstName }, your verification code is ${ otp }. Please enter it`;
            
            await UserModel.updateOne(args.userId, { otp: otp });

            let sentSMS: boolean;
            sentSMS = process.env.NODE_ENV === 'test' ? true : await new SMSService(user.phone, message).sendMessage();
           
            if (sentSMS) {
                return otp; 
            } 
            else {
                throw new Error("An error was encountered during OTP send");
            }
        }
        throw new Error(`There exists no user with user ID ${args.userId}`);   
    }
    throw new Error(`Resend Otp requires a user ID. No user ID was parsed`); 
} 
    