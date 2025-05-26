import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserResolver } from './users.resolvers';
import { User } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: [UserService, UserResolver],
})
export class UserModule {}
