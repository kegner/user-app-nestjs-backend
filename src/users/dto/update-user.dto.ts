import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateUserDto } from './create-user.dto';

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Field()
  id: string;
}
