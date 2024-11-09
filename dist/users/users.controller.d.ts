import { CreateUserDto } from './dtos/create-user.dto';
export declare class UsersController {
    getUsers(id: number | undefined, limit: number, page: number): string;
    createUsers(createUserDto: CreateUserDto): string;
}
