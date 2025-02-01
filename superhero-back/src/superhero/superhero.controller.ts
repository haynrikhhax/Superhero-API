import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

// Defines the base route
@Controller('superhero')
export class SuperheroController {
  /**
   * Injects the SuperheroService into the controller.
   */
  constructor(private superheroService: SuperheroService) {}

  /**
   * Creates a new superhero.
   * @param createSuperheroDto - The data transfer object containing superhero details.
   */
  @Post()
  async create(@Body() createSuperheroDto: CreateSuperheroDto) {
    await this.superheroService.createSuperhero(createSuperheroDto);
  }

  /**
   * Retrieves the list of superheroes.
   * @returns An array of superheroes sorted by humility score in descending order.
   */
  @Get()
  async get() {
    return await this.superheroService.getSuperheroes();
  }
}
