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