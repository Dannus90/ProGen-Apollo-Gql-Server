import { merge } from "lodash";

interface MutationResolvers {
  
}

const mutationResolver: MutationResolvers = {
  Mutation: {
    authentication: async () => true,
  },
};

export const rootMutation = merge(
  mutationResolver,
);