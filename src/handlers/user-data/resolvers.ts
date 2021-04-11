interface userDataResolvers {
  
}

export const userDataResolvers: userDataResolvers = {
  UserDataRoot: {
    getFullUserInformation: async (_, args, context, info) => {
      console.log(args);
      console.log(context);
      console.log(info);
    }
  }
}