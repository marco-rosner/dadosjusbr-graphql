import { registerEnumType } from "type-graphql";

export enum Params {
    GRUPO = 'grupo',
    ORGAO = 'orgao'
}

registerEnumType(Params, {
    name: "Params",
    description: "Params to use in indice endpoints"
})