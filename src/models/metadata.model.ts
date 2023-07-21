import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Metadata {
    @Field()
    acesso: string
    @Field()
    dados_estritamente_tabulares: boolean
    @Field()
    despesas: string
    @Field()
    extensao: string
    @Field()
    formato_aberto: boolean
    @Field()
    manteve_consistencia_no_formato: boolean
    @Field()
    outras_receitas: string
    @Field()
    remuneracao_basica: string
    @Field()
    tem_cargo: boolean
    @Field()
    tem_lotacao: boolean
    @Field()
    tem_matricula: boolean
}