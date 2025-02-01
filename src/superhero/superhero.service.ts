import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { GetSuperheroDto } from './dto/get-superhero.dto';

@Injectable()
export class SuperheroService {
    private superheroes: GetSuperheroDto[] = [];

    get() {
        return this.superheroes;
    }

    set(superheroes: GetSuperheroDto[]): void {
        this.superheroes = superheroes;
    }

    getSuperheroes(): GetSuperheroDto[] {
        return this.get().sort((a, b) => b["humilityScore"] - a["humilityScore"]);
    }

    createSuperhero(superhero: CreateSuperheroDto) {
        this.set([...this.get(), superhero]);
    }
}
