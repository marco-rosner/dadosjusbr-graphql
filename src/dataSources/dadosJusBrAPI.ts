import { RESTDataSource } from "apollo-datasource-rest";

export class DadosJusBrAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'https://api.dadosjusbr.org/v2'
    }

    async getOrgaos() {
        return this.get("/orgaos");
    }

    async getOrgaoById(id: string) {
        return this.get(`/orgao/${id}`);
    }

    async getDadosById(id: string) {
        return this.get(`/dados/${id}`);
    }

    async getDadosByIdAndAno(id: string, year: number) {
        return this.get(`/dados/${id}/${year}`);
    }

    async getDadosByIdAndAnoAndMonth(id: string, year: number, month: number) {
        return this.get(`/dados/${id}/${year}/${month}`);
    }

    async getAggregateIndexes(param: string, valor: string) {
        return this.get(`/indice/${param}/${valor}`);
    }

    async getAggregateIndexesByYear(param: string, valor: string, year: number) {
        return this.get(`/indice/${param}/${valor}/${year}`);
    }

    async getAggregateIndexesByYearAndMonth(
        param: string,
        valor: string,
        year: number,
        month: number
        ) {
        return this.get(`/indice/${param}/${valor}/${year}/${month}`);
    }

    async getIndexes() {
        return this.get("/indice");
    }

    async getIndexesByYear(year: number) {
        return this.get(`/indices/${year}`);
    }

    async getIndexesByYearAndMonth(year: number, month: number) {
        return this.get(`/indices/${year}/${month}`);
    }
}