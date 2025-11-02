import { ObjectType, Field, Int, PartialType } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;
}

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {}
