[![genDocsGPT](https://img.shields.io/badge/Doc%20generated%20by-genDocsGPT-blue)](https://github.com/marco-rosner/genDocsGPT)

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
  - [Backup](#backup)
  - [Collect](#collect)
  - [DataSummary](#datasummary)
  - [miError](#mierror)
  - [SummaryzedMI](#summaryzedmi)
  - [AggregateIndexes](#aggregateindexes)
- [API Endpoints](#api-endpoints)
  - [Get Orgaos](#get-orgaos)
  - [Get Orgao by ID](#get-orgao-by-id)
  - [Get Dados by ID](#get-dados-by-id)
  - [Get Dados by ID and Ano](#get-dados-by-id-and-ano)
  - [Get Dados by ID, Ano, and Month](#get-dados-by-id-ano-and-month)
  - [Get Aggregate Indexes](#get-aggregate-indexes)
  - [Get Aggregate Indexes by Year](#get-aggregate-indexes-by-year)
  - [Get Aggregate Indexes by Year and Month](#get-aggregate-indexes-by-year-and-month)
  - [Get Indexes](#get-indexes)
  - [Get Indexes by Year](#get-indexes-by-year)
  - [Get Indexes by Year and Month](#get-indexes-by-year-and-month)

## Models

### Metadata
| Field | Type |
| --- | --- |
| acesso | string |
| dados_estritamente_tabulares | boolean |
| despesas | string |
| extensao | string |
| formato_aberto | boolean |
| manteve_consistencia_no_formato | boolean |
| outras_receitas | string |
| remuneracao_basica | string |
| tem_cargo | boolean |
| tem_lotacao | boolean |
| tem_matricula | boolean |

### Params
| Field | Type |
| --- | --- |
| GRUPO | string |
| ORGAO | string |

### Summaries
| Field | Type |
| --- | --- |
| membros_ativos | Summary |

### Agency
| Field | Type | Description |
| --- | --- | --- |
| entidade | string | 'Tribunal', 'Ministério' or 'Conselho'. |
| id_orgao | string | 'trt13' |
| jurisdicao | string | 'Estadual', 'Eleitroral', 'Militar', etc.. |
| nome | string | 'Tribunal Regional do Trabalho 13° Região' |
| ouvidoria | string | Agencys's ombudsman url |
| twitter_handle | string | Agencys's twitter handle |
| uf | string | Short code for federative unity. |
| url | string | ALink for state url |
| possui_dados | boolean | If there is data from that agency |
| total_coletas_realizadas | number |  |
| meses_com_dados | number |  |
| indice_transparencia | Score |  |
| coletas | [SummaryzedMI] |  |

### Summary
| Field | Type |
| --- | --- |
| quantidade | number |
| remuneracao_base | DataSummary |
| outras_remuneracoes | DataSummary |
| descontos | DataSummary |

### User
| Field | Type |
| --- | --- |
| id | number |
| name | string |
| email | string |

### UserInput
| Field | Type |
| --- | --- |
| name | string |
| email | string |

### IndexInformation
| Field | Type |
| --- | --- |
| mes | number |
| ano | number |
| indice_transparencia | Score |
| metadados | Metadata |

### Score
| Field | Type |
| --- | --- |
| indice_completude | number |
| indice_facilidade | number |
| indice_transparencia | number |

### Backup
| Field | Type |
| --- | --- |
| hash | string |
| size | number |
| url | string |

### Collect
| Field | Type |
| --- | --- |
| duracao_segundos | number |
| repositorio_coletor | string |
| repositorio_parser | string |
| versao_coletor | string |
| versao_parser | string |

### DataSummary
| Field | Type |
| --- | --- |
| max | number |
| media | number |
| min | number |
| total | number |

### miError
| Field | Type |
| --- | --- |
| cmd | string |
| err_msg | string |
| status | number |

### SummaryzedMI
| Field | Type |
| --- | --- |
| ano | number |
| mes | number |
| id_orgao | string |
| dados_coleta | Collect |
| error | miError |
| indice_transparencia | Score |
| metadados | Metadata |
| pacote_de_dados | Backup |
| sumarios | Summaries |

### AggregateIndexes
| Field | Type |
| --- | --- |
| id_orgao | string |
| agregado | Score |
| detalhe | [IndexInformation] |

## API Endpoints

### Get Orgaos
Retrieves a list of all orgaos.

**Request**
```shell
GET /orgaos
```

**Response**
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

### Get Orgao by ID
Retrieves an orgao by ID.

**Request**
```shell
GET /orgao/{id}
```

**Response**
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

### Get Dados by ID
Retrieves dados by ID.

**Request**
```shell
GET /dados/{id}
```

**Response**
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

### Get Dados by ID and Ano
Retrieves dados by ID and Ano.

**Request**
```shell
GET /dados/{id}/{year}
```

**Response**
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

### Get Dados by ID, Ano, and Month
Retrieves dados by ID, Ano, and Month.

**Request**
```shell
GET /dados/{id}/{year}/{month}
```

**Response**
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

### Get Aggregate Indexes
Retrieves aggregate indexes.

**Request**
```shell
GET /indice/{param}/{valor}
```

**Response**
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

### Get Aggregate Indexes by Year
Retrieves aggregate indexes by year.

**Request**
```shell
GET /indice/{param}/{valor}/{year}
```

**Response**
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

### Get Aggregate Indexes by Year and Month
Retrieves aggregate indexes by year and month.

**Request**
```shell
GET /indice/{param}/{valor}/{year}/{month}
```

**Response**
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
Retrieves all indexes.

**Request**
```shell
GET /indice
```

**Response**
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

### Get Indexes by Year
Retrieves indexes by year.

**Request**
```shell
GET /indices/{year}
```

**Response**
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

### Get Indexes by Year and Month
Retrieves indexes by year and month.

**Request**
```shell
GET /indices/{year}/{month}
```

**Response**
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