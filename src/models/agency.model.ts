import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Agency {
    @Field()
    entidade: string
    @Field()
    id_orgao: string
    @Field()
    jurisdicao: string
    @Field()
    nome: String
    @Field()
    ouvidoria: string
    @Field()
    twitter_handle: string
    @Field()
    uf: string
    @Field()
    url: string
    @Field()
    possui_dados: string
}