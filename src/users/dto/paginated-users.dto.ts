import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../entity/user.entity';

@ObjectType()
export class PaginatedUsers {
  @Field(() => [User])
  users: User[];

  @Field(() => Int)
  total: number;
}
