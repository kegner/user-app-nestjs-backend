import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entity/user.entity';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
import { PaginatedUsers } from './dto/paginated-users.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => PaginatedUsers)
  getUsers(@Args('params', { nullable: true }) params?: QueryUserDto) {
    return this.userService.findAll(params);
  }

  @Query(() => User)
  getUser(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  createUser(@Args('user') user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Mutation(() => User)
  async updateUser(@Args('user') user: UpdateUserDto) {
    await this.userService.updateUser(user);

    return this.userService.findOne(user.id);
  }

  @Mutation(() => String)
  async deleteUser(@Args('id') id: string) {
    await this.userService.deleteUser(id);

    return id;
  }
}
