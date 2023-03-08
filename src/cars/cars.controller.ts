import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService // Inyección de dependencias
  ){}

  // Petición get
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  // Obtener paŕametro
  @Get(':id') // Segmento dinámico
  // Utilización del pipe, ParseIntPipe (convertir el parámetro a int)
  getCarById( @Param('id', ParseIntPipe) id: number ) { // Obtener el segmento, mismo nombre que el segmento, por defecto va a ser string siempre
    console.log({ id });
    return this.carsService.findOneById( id );
  }

}
