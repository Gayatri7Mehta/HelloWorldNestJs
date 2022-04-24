import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  @Get()
  findAll() {
    return 'i find all coffee';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `i find ${id} count of coffee `;
  }

  @Post()
  @HttpCode(HttpStatus.FORBIDDEN)
  create(@Body('name') body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `i changed ${id} counts coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this action remove ${id} counts coffee `;
  }
}
