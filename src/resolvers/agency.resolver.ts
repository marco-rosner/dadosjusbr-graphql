import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Context } from "../dataSources";
import { Agency } from "../models/agency.model";
import { AggregateIndexes } from "../models/aggregateIndexes.model";
import { Params } from "../models/enum";
import { SummaryzedMI } from "../models/summaryzedMI.model";

@Resolver(Agency)
export class AgencyResolver {

    @Query(() => [Agency])
    async getAgencies(@Ctx() context: Context): Promise<Agency[]> {
        return context.dataSources.dadosJusBrAPI.getOrgaos();
    }

    @Query(() => Agency)
    async getAgency(
        @Arg("id") id: string,
        @Ctx() context: Context
    ): Promise<Agency> {
        return context.dataSources.dadosJusBrAPI.getOrgaoById(id);
    }

    @Query(() => Agency)
    async getDataByAgency(
        @Arg("id") id: string,
        @Ctx() context: Context
    ): Promise<Agency> {
        return context.dataSources.dadosJusBrAPI.getDadosById(id);
    }

    @Query(() => [SummaryzedMI])
    async getDataByAgencyAndYear(
        @Arg("id") id: string,
        @Arg("year") year: number,
        @Ctx() context: Context
    ): Promise<SummaryzedMI[]> {
        return context.dataSources.dadosJusBrAPI.getDadosByIdAndAno(id, year);
    }

    @Query(() => SummaryzedMI)
    async getDataByAgencyAndYearAndMonth(
        @Arg("id") id: string,
        @Arg("year") year: number,
        @Arg("month") month: number,
        @Ctx() context: Context
    ): Promise<SummaryzedMI> {
        return context.dataSources.dadosJusBrAPI.getDadosByIdAndAnoAndMonth(id, year, month);
    }

    @Query(() => [AggregateIndexes])
    async getAggregateIndexes(
        @Arg("param", type => Params, { description: "Valores validos: grupo ou orgao" }) param: string,
        @Arg("valor", { description: "Jurisdição ou ID do órgão" }) valor: string,
        @Ctx() context: Context
    ): Promise<AggregateIndexes[]> {
        return context.dataSources.dadosJusBrAPI.getAggregateIndexes(param, valor);
    }

    @Query(() => [AggregateIndexes])
    async getAggregateIndexesByYear(
        @Arg("param", type => Params,{ description: "Valores validos: grupo ou orgao" }) param: string,
        @Arg("valor", { description: "Jurisdição ou ID do órgão" }) valor: string,
        @Arg("ano") year: number,
        @Ctx() context: Context
    ): Promise<AggregateIndexes[]> {
        return context.dataSources.dadosJusBrAPI.getAggregateIndexesByYear(param, valor, year);
    }

    @Query(() => [AggregateIndexes])
    async getAggregateIndexesByYearAndMonth(
        @Arg("param", type => Params,{ description: "Valores validos: grupo ou orgao" }) param: string,
        @Arg("valor", { description: "Jurisdição ou ID do órgão" }) valor: string,
        @Arg("ano") year: number,
        @Arg("mes") month: number,
        @Ctx() context: Context
    ): Promise<AggregateIndexes[]> {
        return context.dataSources.dadosJusBrAPI.getAggregateIndexesByYearAndMonth(param, valor, year, month);
    }

    @Query(() => [AggregateIndexes])
    async getIndexes(@Ctx() context: Context): Promise<AggregateIndexes[]> {
        return context.dataSources.dadosJusBrAPI.getIndexes();
    }

    @Query(() => [AggregateIndexes])
    async getIndexesByYear(
        @Arg("ano") year: number,
        @Ctx() context: Context
    ): Promise<AggregateIndexes[]> {
        return context.dataSources.dadosJusBrAPI.getIndexesByYear(year);
    }

    @Query(() => [AggregateIndexes])
    async getIndexesByYearAndMonth(
        @Arg("ano") year: number,
        @Arg("mes") month: number,
        @Ctx() context: Context
    ): Promise<AggregateIndexes[]> {
        return context.dataSources.dadosJusBrAPI.getIndexesByYearAndMonth(year, month);
    }
}