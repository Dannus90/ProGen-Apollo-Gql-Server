import { merge } from "lodash";

interface MutationResolvers {

}

const mutationResolver: MutationResolvers = {
  Mutation: {
    productPrice: async () => true,
  },
};

export const rootMutation = merge(
  mutationResolver,
);