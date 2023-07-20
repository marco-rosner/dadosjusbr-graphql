import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User, UserInput } from "../models/user.model";

@Resolver(() => User)
export class UserResolver {
    private users: User[] = [
        { id: 1, name: "Marco Rosner", email: "marco@rosner.com"},
        { id: 2, name: "João Silva", email: "joao@silva.com"},
        { id: 3, name: "Pedro João", email: "pedro@joao.com"}
    ]

    @Query(() => [User])
    async getUsers(): Promise<User[]> {
        return this.users
    }

    @Query(() => User)
    async getUser(@Arg("id") id: number): Promise<User | undefined> {
        const user = this.users.find(user => user.id === id)
        return user
    }

    @Mutation(() => User)
    async createUser(@Arg('input') input: UserInput): Promise<User> {
        const user = {
            id: this.users.length + 1,
            ...input
        }

        this.users.push(user)

        return user
    }

    @Mutation(() => User)
    async updateUser(
        @Arg("id") id: number,
        @Arg('input') input: UserInput
    ): Promise<User> {
        const user = this.users.find(user => user.id === id)

        if (!user) {
            throw new Error("User not found")
        }

        const updateUser = {
            ...user,
            ...input
        }

        this.users = this.users.map(user => (user.id === id ? updateUser : user))

        return updateUser
    }
}