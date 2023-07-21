import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Score {
    @Field()
    indice_completude: number
    @Field()
    indice_facilidade: number
    @Field()
    indice_transparencia: number
}