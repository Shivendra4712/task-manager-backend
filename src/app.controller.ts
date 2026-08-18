import { Controller, Get, Post, Put, Delete, Body, Headers, Param, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('auth/guest')
  async guestLogin() {
    return this.appService.createGuestUser();
  }

  @Get('tasks')
  async getTasks(@Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.appService.getTasks(userId);
  }

  @Post('tasks')
  async createTask(@Headers('x-user-id') userId: string, @Body() body: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    if (!body.title) throw new HttpException('Title is required', HttpStatus.BAD_REQUEST);
    return this.appService.createTask(userId, body);
  }

  @Put('tasks/:id')
  async updateTask(@Param('id') id: string, @Headers('x-user-id') userId: string, @Body() body: any) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.appService.updateTask(id, userId, body);
  }

  @Delete('tasks/:id')
  async deleteTask(@Param('id') id: string, @Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.appService.deleteTask(id, userId);
  }
}
