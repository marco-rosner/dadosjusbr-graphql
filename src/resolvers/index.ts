import { NonEmptyArray } from "type-graphql";
import { AgencyResolver } from "./agency.resolver";
import { UserResolver } from "./user.resolver";

export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
    UserResolver,
    AgencyResolver
]