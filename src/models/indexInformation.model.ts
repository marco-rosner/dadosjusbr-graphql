import { Field, ObjectType } from "type-graphql";
import { Metadata } from "./metadata.model";
import { Score } from "./score.model";

@ObjectType()
export class IndexInformation {
    @Field({ nullable: true})
    mes: number
    @Field()
    ano: number
    @Field()
    indice_transparencia: Score
    @Field({ nullable: true})
    metadados: Metadata 
}