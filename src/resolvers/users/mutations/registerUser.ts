import { registerUser} from '../types';
import UserModel from '../UserModel';
import TimeHelper from "../../../helpers/TimeHelper";

export default async function registerUser(parent: any, args: registerUser, context: any): Promise<registerUser> | never{
    let newUser; 

    
    let formattedPhoneNumber;
    let phone = args.phone;
    let condition;
    let existingUser;

    if(phone.length < 9 || args.callingCode.length < 1 ) {
        throw new Error("Invalid Phone Number / Country Code");
    }

    if (phone.length) {
        formattedPhoneNumber = `+${args.callingCode}${phone}`;
            
        condition = {
            OR : [
                { whatsAppPhone: formattedPhoneNumber  },
                { phone: formattedPhoneNumber  },
            ]
        } 
    }

        

    else if( args.email.length) {
        condition = {
            OR: [
                { email: args.email  }
            ]
        }
    }
       
    try {
        
        existingUser = await UserModel.findOneWhere(context.prisma.users, condition);
        
        
    } catch(error: unknown) {
         
        throw new Error(`There was an error finding User`);
    }
        
    if (existingUser) { 
         throw new Error(" User already exists")
    }
        
    else {
        const data = {
            phone: formattedPhoneNumber,
            country: args.country,
            otp: args.otp,
            email: args.email,
            username: args.username,
        } 
        newUser = await UserModel.createOne(context.prisma.users, data);
       

        if (newUser) {
            // Delete user password
            // Send response in json format


            const welcomeMessage = `${newUser.firstname ? `Dear ${newUser.firstName}, ` : ''}Welcome to My Store Aid. We're excited to help manage your store effectively! For support, Call/ whatsapp 0550001188. Let's grow your business together!`;
            //Send SMS 


            const time = TimeHelper.currentDate;
            //Send mail to the admin


            //Send verification code
                        
        }
    }
    return newUser;
} 
    