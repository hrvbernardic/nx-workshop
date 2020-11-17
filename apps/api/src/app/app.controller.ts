import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllGames() {
    return this.appService.getAllGames();
  }

  @Get()
  getGames(@Param('id') id: string) {
    return this.appService.getGame(id);
  }
}
