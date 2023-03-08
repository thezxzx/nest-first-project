import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
  createCar(@Body() createCarDto: CreateCarDTO) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
