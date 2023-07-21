import { Ctx, Query, Resolver } from "type-graphql";
import { Context } from "../dataSources";
import { Agency } from "../models/agency.model";

@Resolver(Agency)
export class AgencyResolver {

    @Query(() => [Agency])
    async getAgencies(@Ctx() context: Context): Promise<Agency[]> {
        return context.dataSources.dadosJusBrAPI.getOrgaos();
    }
}