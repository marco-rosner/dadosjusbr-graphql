# API Documentation

## Table of Contents
- [Models](#models)
  - [Metadata](#metadata)
  - [Params](#params)
  - [Summaries](#summaries)
  - [Agency](#agency)
  - [Summary](#summary)
  - [User](#user)
  - [UserInput](#userinput)
  - [IndexInformation](#indexinformation)
  - [Score](#score)
  - [SummaryzedMI](#summaryzedmi)
  - [Backup](#backup)
  - [Collect](#collect)
  - [DataSummary](#datasummary)
  - [miError](#mierror)
  - [AggregateIndexes](#aggregateindexes)
- [API Endpoints](#api-endpoints)
  - [Get Orgaos](#get-orgaos)
  - [Get Orgao By Id](#get-orgao-by-id)
  - [Get Dados By Id](#get-dados-by-id)
  - [Get Dados By Id and Ano](#get-dados-by-id-and-ano)
  - [Get Dados By Id and Ano and Month](#get-dados-by-id-and-ano-and-month)
  - [Get Aggregate Indexes](#get-aggregate-indexes)
  - [Get Aggregate Indexes By Year](#get-aggregate-indexes-by-year)
  - [Get Aggregate Indexes By Year and Month](#get-aggregate-indexes-by-year-and-month)
  - [Get Indexes](#get-indexes)
  - [Get Indexes By Year](#get-indexes-by-year)
  - [Get Indexes By Year and Month](#get-indexes-by-year-and-month)

## Models

### Metadata
```typescript
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
```

### Params
```typescript
import { registerEnumType } from "type-graphql";

export enum Params {
    GRUPO = 'grupo',
    ORGAO = 'orgao'
}

registerEnumType(Params, {
    name: "Params",
    description: "Params to use in indice endpoints"
})
```

### Summaries
```typescript
import { Field, ObjectType } from "type-graphql";
import { Summary } from "./summary.model";

@ObjectType()
export class Summaries {
    @Field()
    membros_ativos: Summary
}
```

### Agency
```typescript
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
```

### Summary
```typescript
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
```

### User
```typescript
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field()
    id!: number
    @Field()
    name!: string
    @Field()
    email!: string
}
```

### UserInput
```typescript
import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class UserInput implements Pick<User, "name" | "email"> {
    @Field()
    name!: string
    @Field()
    email!: string
}
```

### IndexInformation
```typescript
import { Field, ObjectType } from "type-graphql";

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
```

### Score
```typescript
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
```

### SummaryzedMI
```typescript
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
```

### Backup
```typescript
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Backup {
    @Field()
    hash: string
    @Field()
    size: number
    @Field()
    url: string
}
```

### Collect
```typescript
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
```

### DataSummary
```typescript
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class DataSummary {
    @Field()
    max: number
    @Field()
    media: number
    @Field({ nullable: true })
    min: number
    @Field()
    total: number
}
```

### miError
```typescript
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class miError {
    @Field({ nullable: true })
    cmd: string
    @Field({ nullable: true })
    err_msg: string
    @Field({ nullable: true })
    status: number
}
```

### AggregateIndexes
```typescript
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
```

## API Endpoints

### Get Orgaos
Get all orgaos.

**Request:**
```
GET /orgaos
```

**Response:**
```json
[
  {
    "entidade": "string",
    "id_orgao": "string",
    "jurisdicao": "string",
    "nome": "string",
    "ouvidoria": "string",
    "twitter_handle": "string",
    "uf": "string",
    "url": "string",
    "possui_dados": true,
    "total_coletas_realizadas": 0,
    "meses_com_dados": 0,
    "indice_transparencia": {
      "indice_completude": 0,
      "indice_facilidade": 0,
      "indice_transparencia": 0
    },
    "coletas": [
      {
        "ano": 0,
        "mes": 0,
        "id_orgao": "string",
        "dados_coleta": {
          "duracao_segundos": 0,
          "repositorio_coletor": "string",
          "repositorio_parser": "string",
          "versao_coletor": "string",
          "versao_parser": "string"
        },
        "error": {
          "cmd": "string",
          "err_msg": "string",
          "status": 0
        },
        "indice_transparencia": {
          "indice_completude": 0,
          "indice_facilidade": 0,
          "indice_transparencia": 0
        },
        "metadados": {
          "acesso": "string",
          "dados_estritamente_tabulares": true,
          "despesas": "string",
          "extensao": "string",
          "formato_aberto": true,
          "manteve_consistencia_no_formato": true,
          "outras_receitas": "string",
          "remuneracao_basica": "string",
          "tem_cargo": true,
          "tem_lotacao": true,
          "tem_matricula": true
        },
        "pacote_de_dados": {
          "hash": "string",
          "size": 0,
          "url": "string"
        },
        "sumarios": {
          "membros_ativos": {
            "quantidade": 0,
            "remuneracao_base": {
              "max": 0,
              "media": 0,
              "min": 0,
              "total": 0
            },
            "outras_remuneracoes": {
              "max": 0,
              "media": 0,
              "min": 0,
              "total": 0
            },
            "descontos": {
              "max": 0,
              "media": 0,
              "min": 0,
              "total": 0
            }
          }
        }
      }
    ]
  }
]
```

### Get Orgao By Id
Get orgao by id.

**Request:**
```
GET /orgao/{id}
```

**Response:**
```json
{
  "entidade": "string",
  "id_orgao": "string",
  "jurisdicao": "string",
  "nome": "string",
  "ouvidoria": "string",
  "twitter_handle": "string",
  "uf": "string",
  "url": "string",
  "possui_dados": true,
  "total_coletas_realizadas": 0,
  "meses_com_dados": 0,
  "indice_transparencia": {
    "indice_completude": 0,
    "indice_facilidade": 0,
    "indice_transparencia": 0
  },
  "coletas": [
    {
      "ano": 0,
      "mes": 0,
      "id_orgao": "string",
      "dados_coleta": {
        "duracao_segundos": 0,
        "repositorio_coletor": "string",
        "repositorio_parser": "string",
        "versao_coletor": "string",
        "versao_parser": "string"
      },
      "error": {
        "cmd": "string",
        "err_msg": "string",
        "status": 0
      },
      "indice_transparencia": {
        "indice_completude": 0,
        "indice_facilidade": 0,
        "indice_transparencia": 0
      },
      "metadados": {
        "acesso": "string",
        "dados_estritamente_tabulares": true,
        "despesas": "string",
        "extensao": "string",
        "formato_aberto": true,
        "manteve_consistencia_no_formato": true,
        "outras_receitas": "string",
        "remuneracao_basica": "string",
        "tem_cargo": true,
        "tem_lotacao": true,
        "tem_matricula": true
      },
      "pacote_de_dados": {
        "hash": "string",
        "size": 0,
        "url": "string"
      },
      "sumarios": {
        "membros_ativos": {
          "quantidade": 0,
          "remuneracao_base": {
            "max": 0,
            "media": 0,
            "min": 0,
            "total": 0
          },
          "outras_remuneracoes": {
            "max": 0,
            "media": 0,
            "min": 0,
            "total": 0
          },
          "descontos": {
            "max": 0,
            "media": 0,
            "min": 0,
            "total": 0
          }
        }
      }
    }
  ]
}
```

### Get Dados By Id
Get dados by id.

**Request:**
```
GET /dados/{id}
```

**Response:**
```json
{
  "ano": 0,
  "mes": 0,
  "id_orgao": "string",
  "dados_coleta": {
    "duracao_segundos": 0,
    "repositorio_coletor": "string",
    "repositorio_parser": "string",
    "versao_coletor": "string",
    "versao_parser": "string"
  },
  "error": {
    "cmd": "string",
    "err_msg": "string",
    "status": 0
  },
  "indice_transparencia": {
    "indice_completude": 0,
    "indice_facilidade": 0,
    "indice_transparencia": 0
  },
  "metadados": {
    "acesso": "string",
    "dados_estritamente_tabulares": true,
    "despesas": "string",
    "extensao": "string",
    "formato_aberto": true,
    "manteve_consistencia_no_formato": true,
    "outras_receitas": "string",
    "remuneracao_basica": "string",
    "tem_cargo": true,
    "tem_lotacao": true,
    "tem_matricula": true
  },
  "pacote_de_dados": {
    "hash": "string",
    "size": 0,
    "url": "string"
  },
  "sumarios": {
    "membros_ativos": {
      "quantidade": 0,
      "remuneracao_base": {
        "max": 0,
        "media": 0,
        "min": 0,
        "total": 0
      },
      "outras_remuneracoes": {
        "max": 0,
        "media": 0,
        "min": 0,
        "total": 0
      },
      "descontos": {
        "max": 0,
        "media": 0,
        "min": 0,
        "total": 0
      }
    }
  }
}
```

### Get Dados By Id and Ano
Get dados by id and ano.

**Request:**
```
GET /dados/{id}/{ano}
```

**Response:**
```json
{
  "ano": 0,
  "mes": 0,
  "id_orgao": "string",
  "dados_coleta": {
    "duracao_segundos": 0,
    "repositorio_coletor": "string",
    "repositorio_parser": "string",
    "versao_coletor": "string",
    "versao_parser": "string"
  },
  "error": {
    "cmd": "string",
    "err_msg": "string",
    "status": 0
  },
  "indice_transparencia": {
    "indice_completude": 0,
    "indice_facilidade": 0,
    "indice_transparencia": 0
  },
  "metadados": {
    "acesso": "string",
    "dados_estritamente_tabulares": true,
    "despesas": "string",
    "extensao": "string",
    "formato_aberto": true,
    "manteve_consistencia_no_formato": true,
    "outras_receitas": "string",
    "remuneracao_basica": "string",
    "tem_cargo": true,
    "tem_lotacao": true,
    "tem_matricula": true
  },
  "pacote_de_dados": {
    "hash": "string",
    "size": 0,
    "url": "string"
  },
  "sumarios": {
    "membros_ativos": {
      "quantidade": 0,
      "remuneracao_base": {
        "max": 0,
        "media": 0,
        "min": 0,
        "total": 0
      },
      "outras_remuneracoes": {
        "max": 0,
        "media": 0,
        "min": 0,
        "total": 0
      },
      "descontos": {
        "max": 0,
        "media": 0,
        "min": 0,
        "total": 0
      }
    }
  }
}
```

### Get Dados By Id and Ano and Month
Get dados by id, ano, and month.

**Request:**
```
GET /dados/{id}/{ano}/{month}
```

**Response:**
```json
{
  "ano": 0,
  "mes": 0,
  "id_orgao": "string",
  "dados_coleta": {
    "duracao_segundos": 0,
    "repositorio_coletor": "string",
    "repositorio_parser": "string",
    "versao_coletor": "string",
    "versao_parser": "string"
  },
  "error": {
    "cmd": "string",
    "err_msg": "string",
    "status": 0
  },
  "indice_transparencia": {
    "indice_completude": 0,
    "indice_facilidade": 0,
    "indice_transparencia": 0
  },
  "metadados": {
    "acesso": "string",
    "dados_estritamente_tabulares": true,
    "despesas": "string",
    "extensao": "string",
    "formato_aberto": true,
    "manteve_consistencia_no_formato": true,
    "outras_receitas": "string",
    "remuneracao_basica": "string",
    "tem_cargo": true,
    "tem_lotacao": true,
    "tem_matricula": true
  },
  "pacote_de_dados": {
    "hash": "string",
    "size": 0,
    "url": "string"
  },
  "sumarios": {
    "membros_ativos": {
      "quantidade": 0,
      "remuneracao_base": {
        "max": 0,
        "media": 0,
        "min": 0,
        "total": 0
      },
      "outras_remuneracoes": {
        "max": 0,
        "media": 0,
        "min": 0,
        "total": 0
      },
      "descontos": {
        "max": 0,
        "media": 0,
        "min": 0,
        "total": 0
      }
    }
  }
}
```

### Get Aggregate Indexes
Get aggregate indexes.

**Request:**
```
GET /indice/{param}/{valor}
```

**Response:**
```json
{
  "id_orgao": "string",
  "agregado": {
    "indice_completude": 0,
    "indice_facilidade": 0,
    "indice_transparencia": 0
  },
  "detalhe": [
    {
      "mes": 0,
      "ano": 0,
      "indice_transparencia": {
        "indice_completude": 0,
        "indice_facilidade": 0,
        "indice_transparencia": 0
      },
      "metadados": {
        "acesso": "string",
        "dados_estritamente_tabulares": true,
        "despesas": "string",
        "extensao": "string",
        "formato_aberto": true,
        "manteve_consistencia_no_formato": true,
        "outras_receitas": "string",
        "remuneracao_basica": "string",
        "tem_cargo": true,
        "tem_lotacao": true,
        "tem_matricula": true
      }
    }
  ]
}
```

### Get Aggregate Indexes By Year
Get aggregate indexes by year.

**Request:**
```
GET /indice/{param}/{valor}/{year}
```

**Response:**
```json
{
  "id_orgao": "string",
  "agregado": {
    "indice_completude": 0,
    "indice_facilidade": 0,
    "indice_transparencia": 0
  },
  "detalhe": [
    {
      "mes": 0,
      "ano": 0,
      "indice_transparencia": {
        "indice_completude": 0,
        "indice_facilidade": 0,
        "indice_transparencia": 0
      },
      "metadados": {
        "acesso": "string",
        "dados_estritamente_tabulares": true,
        "despesas": "string",
        "extensao": "string",
        "formato_aberto": true,
        "manteve_consistencia_no_formato": true,
        "outras_receitas": "string",
        "remuneracao_basica": "string",
        "tem_cargo": true,
        "tem_lotacao": true,
        "tem_matricula": true
      }
    }
  ]
}
```

### Get Aggregate Indexes By Year and Month
Get aggregate indexes by year and month.

**Request:**
```
GET /indice/{param}/{valor}/{year}/{month}
```

**Response:**
```json
{
  "id_orgao": "string",
  "agregado": {
    "indice_completude": 0,
    "indice_facilidade": 0,
    "indice_transparencia": 0
  },
  "detalhe": [
    {
      "mes": 0,
      "ano": 0,
      "indice_transparencia": {
        "indice_completude": 0,
        "indice_facilidade": 0,
        "indice_transparencia": 0
      },
      "metadados": {
        "acesso": "string",
        "dados_estritamente_tabulares": true,
        "despesas": "string",
        "extensao": "string",
        "formato_aberto": true,
        "manteve_consistencia_no_formato": true,
        "outras_receitas": "string",
        "remuneracao_basica": "string",
        "tem_cargo": true,
        "tem_lotacao": true,
        "tem_matricula": true
      }
    }
  ]
}
```

### Get Indexes
Get all indexes.

**Request:**
```
GET /indice
```

**Response:**
```json
[
  {
    "mes": 0,
    "ano": 0,
    "indice_transparencia": {
      "indice_completude": 0,
      "indice_facilidade": 0,
      "indice_transparencia": 0
    },
    "metadados": {
      "acesso": "string",
      "dados_estritamente_tabulares": true,
      "despesas": "string",
      "extensao": "string",
      "formato_aberto": true,
      "manteve_consistencia_no_formato": true,
      "outras_receitas": "string",
      "remuneracao_basica": "string",
      "tem_cargo": true,
      "tem_lotacao": true,
      "tem_matricula": true
    }
  }
]
```

### Get Indexes By Year
Get indexes by year.

**Request:**
```
GET /indices/{year}
```

**Response:**
```json
[
  {
    "mes": 0,
    "ano": 0,
    "indice_transparencia": {
      "indice_completude": 0,
      "indice_facilidade": 0,
      "indice_transparencia": 0
    },
    "metadados": {
      "acesso": "string",
      "dados_estritamente_tabulares": true,
      "despesas": "string",
      "extensao": "string",
      "formato_aberto": true,
      "manteve_consistencia_no_formato": true,
      "outras_receitas": "string",
      "remuneracao_basica": "string",
      "tem_cargo": true,
      "tem_lotacao": true,
      "tem_matricula": true
    }
  }
]
```

### Get Indexes By Year and Month
Get indexes by year and month.

**Request:**
```
GET /indices/{year}/{month}
```

**Response:**
```json
[
  {
    "mes": 0,
    "ano": 0,
    "indice_transparencia": {
      "indice_completude": 0,
      "indice_facilidade": 0,
      "indice_transparencia": 0
    },
    "metadados": {
      "acesso": "string",
      "dados_estritamente_tabulares": true,
      "despesas": "string",
      "extensao": "string",
      "formato_aberto": true,
      "manteve_consistencia_no_formato": true,
      "outras_receitas": "string",
      "remuneracao_basica": "string",
      "tem_cargo": true,
      "tem_lotacao": true,
      "tem_matricula": true
    }
  }
]
```

*This documentation file was generated using [genDocsGPT](https://github.com/marco-rosner/genDocsGPT)*