"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Void = exports.dateScalar = void 0;
const graphql_1 = require("graphql");
// More about custom scalars -> https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
exports.dateScalar = new graphql_1.GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    serialize(value) {
        return value.getTime(); // Convert outgoing Date to integer for JSON
    },
    parseValue(value) {
        return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral(ast) {
        if (ast.kind === graphql_1.Kind.INT) {
            return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
        }
        return null; // Invalid hard-coded value (not an integer)
    }
});
exports.Void = new graphql_1.GraphQLScalarType({
    name: "Void",
    description: "Represents NULL values",
    serialize() {
        return null;
    },
    parseValue() {
        return null;
    },
    parseLiteral() {
        return null;
    }
});
//# sourceMappingURL=custom-scalars.js.map