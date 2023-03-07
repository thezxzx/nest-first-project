import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  private cars = [
    'Toyota',
    'Honda',
    'Jeep',
  ];

  // Petición get
  @Get()
  getAllCars() {
    return this.cars;
  }

  // Obtener paŕametro
  @Get(':id') // Segmento dinámico
  getCarById( @Param('id') id: any ) { // Obtener el segmento, mismo nombre que el segmento, por defecto va a ser string siempre
    const car = this.cars[id];
    if( car ) {
      console.log({ id });
      return { car };
    }
    return {
      'Error': `Not found car with id ${id}`
    }
  }

}
