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
import { CreateCarDTO } from './dto/create-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe) // Que todo el controlador use este pipe
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
    // Obtener el segmento, mismo nombre que el segmento, por defecto va a ser string siempre.
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  @Post()
  // @UsePipes(ValidationPipe) // Pipe que va a utilizar el endpoint
  createCar(@Body() createCar: CreateCarDTO) {
    return {
      createCar,
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
