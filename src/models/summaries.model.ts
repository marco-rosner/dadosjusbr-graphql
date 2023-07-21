import { Field, ObjectType } from "type-graphql";
import { Summary } from "./summary.model";

@ObjectType()
export class Summaries {
    @Field()
    membros_ativos: Summary
}