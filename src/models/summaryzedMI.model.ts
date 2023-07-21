import { Field, ObjectType } from "type-graphql";
import { Backup } from "./backup.model";
import { Collect } from "./collect.model";
import { Metadata } from "./metadata.model";
import { miError } from "./miError.model";
import { Score } from "./score.model";
import { Summaries } from "./summaries.model";

@ObjectType()
export class SummaryzedMI {
    @Field()
    ano: number
    @Field()
    mes: number
    @Field({ nullable: true })
    id_orgao: string
    @Field({ nullable: true })
    dados_coleta: Collect
    @Field({ nullable: true })
    error: miError
    @Field({ nullable: true })
    indice_transparencia: Score
    @Field({ nullable: true })
    metadados: Metadata
    @Field({ nullable: true })
    pacote_de_dados: Backup
    @Field({ nullable: true })
    sumarios: Summaries
}