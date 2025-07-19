import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class QueryUserDto {
  @Field({ nullable: true })
  search?: string;

  @Field(() => String, { nullable: true })
  sort?: string;

  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  pageSize?: number;
}
