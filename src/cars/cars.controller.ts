import { Controller, Get, Param } from '@nestjs/common';
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
  getCarById( @Param('id') id: string ) { // Obtener el segmento, mismo nombre que el segmento, por defecto va a ser string siempre
    const car = this.carsService.findOneById( Number(id) );
    if( car ) {
      console.log({ id });
      return { car };
    }
    return {
      'Error': `Car with id '${id}' not found`
    }
  }

}
