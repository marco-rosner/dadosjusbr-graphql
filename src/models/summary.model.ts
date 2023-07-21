import { Field, ObjectType } from "type-graphql";
import { DataSummary } from "./dataSummary.model";

@ObjectType()
export class Summary {
    @Field()
    quantidade: number
    @Field()
    remuneracao_base: DataSummary
    @Field()
    outras_remuneracoes: DataSummary
    @Field()
    descontos: DataSummary
}