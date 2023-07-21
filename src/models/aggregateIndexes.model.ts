import { Field, ObjectType } from "type-graphql";
import { IndexInformation } from "./indexInformation.model";
import { Score } from "./score.model";

@ObjectType()
export class AggregateIndexes {
    @Field()
    id_orgao: string
    @Field()
    agregado: Score
    @Field(type => [IndexInformation], { nullable: true })
    detalhe: [IndexInformation]
}