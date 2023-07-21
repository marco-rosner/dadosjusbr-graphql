import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Collect {
    @Field()
    duracao_segundos: number
    @Field()
    repositorio_coletor: string
    @Field()
    repositorio_parser: string
    @Field()
    versao_coletor: string
    @Field()
    versao_parser: string 
}