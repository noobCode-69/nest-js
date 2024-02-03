import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'sohel', email: 'sohel@gmail.com' }];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: { username: string; email: string }) {
    this.fakeUsers.push(userDetails);
  }
}
