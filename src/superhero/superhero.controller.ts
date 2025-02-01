import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superhero')
export class SuperheroController {
    constructor(private superheroService: SuperheroService) { }

    @Post()
    create(@Body() createSuperheroDto: CreateSuperheroDto) {
        this.superheroService.createSuperhero(createSuperheroDto);
    }

    @Get()
    get() {
       return this.superheroService.getSuperheroes();
    }
}
