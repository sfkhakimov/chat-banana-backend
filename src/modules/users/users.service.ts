import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async findOne(username: string): Promise<boolean> {
    return true;
  }
}
