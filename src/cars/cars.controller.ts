import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(
    private readonly carsService: CarsService, // Inyección de dependencias
  ) {}

  // Petición get
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  // Obtener paŕametro
  @Get(':id') // Segmento dinámico
  // Utilización del pipe, ParseIntPipe (convertir el parámetro a int)
  // new ParseUUIDPipe({ options }); // Elegir versión de uuid
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    // Obtener el segmento, mismo nombre que el segmento, por defecto va a ser string siempre
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return {
      body,
    };
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return {
      id,
      body,
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
