import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersDtoParam } from './dtos/userParam.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
export declare class UsersController {
    getUsers(getUserSParams: GetUsersDtoParam, limit: number, page: number): string;
    createUsers(createUserDto: CreateUserDto): CreateUserDto;
    patchUser(patchUserDto: PatchUserDto): PatchUserDto;
}
