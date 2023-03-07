import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  // Petición get
  @Get()
  getAllCars() {
    return [
      'Toyota',
      'Honda',
      'Jeep',
    ]
  }

}
