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