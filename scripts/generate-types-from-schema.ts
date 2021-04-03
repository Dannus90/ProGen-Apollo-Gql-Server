import { GraphQLSchema } from 'graphql';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';
import { makeExecutableSchema } from 'graphql-tools';
import { rootTypeDefs } from '../src/root-type-defs';

const generateToPath = async (path: string) => {
  let schema: GraphQLSchema | undefined = undefined;

  try {
    console.log('Creating schema from source files.');
    schema = makeExecutableSchema({
      typeDefs: rootTypeDefs
    });
  } catch (err) {
    console.log('Unable to make schema from source files.');
    console.log(err);
    console.trace();
  }

  if (!schema) {
    return;
  }

  console.log('Creating Typescript types from schema.');
  try {
    generateTypeScriptTypes(schema, path, {
      smartTParent: true,
      smartTResult: true,
      asyncResult: 'always'
    });

    console.log('Successfully generated TS types.');
  } catch (err) {
    console.error(err);
  }
};

generateToPath('./src/types/TypesGraphQL.ts');
