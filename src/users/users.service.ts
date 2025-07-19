import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { FindOptionsOrder, ILike, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryUserDto } from './dto/query-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOne(id: string) {
    return this.usersRepository.findOne({ where: { id } });
  }

  async findAll(params?: QueryUserDto) {
    if (!params) {
      const results = await this.usersRepository.findAndCount();

      return {
        users: results[0],
        total: results[1],
      };
    }

    const { search, sort, page, pageSize } = params;

    const order: FindOptionsOrder<User> = {};

    if (sort?.length) {
      const sortArray = sort.split(',');

      sortArray.forEach((pair) => {
        const sortValues = pair.split(':');

        if (sortValues.length == 2) {
          order[sortValues[0]] = sortValues[1];
        }
      });
    }

    const results = await this.usersRepository.findAndCount({
      where: [
        { firstName: search != null ? ILike(`${search}%`) : undefined },
        { lastName: search != null ? ILike(`${search}%`) : undefined },
        { email: search != null ? ILike(`${search}%`) : undefined },
      ],
      take: pageSize,
      skip: page != null && pageSize != null ? page * pageSize : undefined,
      order: Object.keys(order).length ? order : undefined,
    });

    return {
      users: results[0],
      total: results[1],
    };
  }

  createUser(user: CreateUserDto) {
    const newUser = this.usersRepository.create(user);

    return this.usersRepository.save(newUser);
  }

  updateUser(user: UpdateUserDto) {
    return this.usersRepository.update(user.id, user);
  }

  deleteUser(id: string) {
    return this.usersRepository.delete(id);
  }
}
