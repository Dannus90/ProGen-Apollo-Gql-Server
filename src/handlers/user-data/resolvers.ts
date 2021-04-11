import { Context } from './../../context';
interface userDataResolvers {
  
}

export const userDataResolvers: userDataResolvers = {
  UserDataRoot: {
    getFullUserInformation: async (_, args, context, info): Context => {
      console.log(args);
      console.log(context);
      console.log(info);
    }
  }
}