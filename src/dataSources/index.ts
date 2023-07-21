import { DadosJusBrAPI } from "./dadosJusBrAPI";

export interface Context {
    dataSources: {
        dadosJusBrAPI: DadosJusBrAPI;
    }
}

export const dataSources = () => ({
    dadosJusBrAPI: new DadosJusBrAPI()
})