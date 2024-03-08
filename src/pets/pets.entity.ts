import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType(
        
)
export class Pet {
    @Field(type => String)
    id: number;

    @Field()
    name: string;

    @Field({nullable: true})
    type?: string;
}