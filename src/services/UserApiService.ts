import { User } from '../types/User';
import { HttpService } from './HttpService';

class UserApiService extends HttpService {
  public readonly usersUrl = '/users';
  public readonly getUserUrl = (id: string) => `/users/${id}`;

  public getAllUsers = async () => {
    return this.instance.get<User[]>(this.usersUrl);
  };

  public getUser = async (url: string) => {
    return this.instance.get<User>(url);
  };
}

export const userApiService = new UserApiService();
