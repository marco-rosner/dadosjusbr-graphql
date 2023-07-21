import { Field, ObjectType } from "type-graphql";
import { Score } from "./score.model";
import { SummaryzedMI } from "./summaryzedMI.model";

@ObjectType({ description: "Orgão da Justiça"})
export class Agency {
    @Field({ description: "'Tribunal', 'Ministério' or 'Conselho'." })
    entidade: string
    @Field({ description: "'trt13'" })
    id_orgao: string
    @Field({ description: "'Estadual', 'Eleitroral', 'Militar', etc.." })
    jurisdicao: string
    @Field({ description: "'Tribunal Regional do Trabalho 13° Região'" })
    nome: String
    @Field({ description: "Agencys's ombudsman url" })
    ouvidoria: string
    @Field({ description: "Agencys's twitter handle" })
    twitter_handle: string
    @Field({ description: "Short code for federative unity." })
    uf: string
    @Field({ description: "ALink for state url", nullable: true })
    url: string
    @Field({ description: "If there is data from that agency", nullable: true })
    possui_dados: boolean
    @Field({ nullable: true })
    total_coletas_realizadas: number
    @Field({ nullable: true })
    meses_com_dados: number
    @Field({ nullable: true })
    indice_transparencia: Score
    @Field(type => [SummaryzedMI], { nullable: true })
    coletas: [SummaryzedMI]
}