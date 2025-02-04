import {
  Controller,
//  Delete,
  Get,
  Param,
//  Patch,
  Post,
//  Put,
  Query,
  Body,
//  Headers,
 // Ip,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersDtoParam } from './dtos/userParam.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  /**
   * Final Endpoint - /users/id?limit=10&page=1
   * Parama id - optional, convert to integer, cannot have a default value
   * Query limit - integer, default 10
   * Query page - integer, default value 1
   * ==> USE CASES
   * /users/ -> return all users with default pagination
   * /users/1223 -> returns one user whos id is 1234
   * /users?limit=10&page=2 -> return page 2 with limt of pagination 10
   */
  @Get('/:id?')
  public getUsers(
    @Param() getUserSParams: GetUsersDtoParam,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUserSParams);

    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto instanceof CreateUserDto);
    return createUserDto
  }


  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto
  }
}
