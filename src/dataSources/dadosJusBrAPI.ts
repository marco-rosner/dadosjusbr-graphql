import { RESTDataSource } from "apollo-datasource-rest";

export class DadosJusBrAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = 'https://api.dadosjusbr.org/v2'
    }

    async getOrgaos() {
        return this.get("/orgaos");
    }
}