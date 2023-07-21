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