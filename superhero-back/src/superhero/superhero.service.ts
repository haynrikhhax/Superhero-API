import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { GetSuperheroDto } from './dto/get-superhero.dto';

@Injectable()
export class SuperheroService {
  // Stores the list of superheroes
  private superheroes: GetSuperheroDto[] = [];

  /**
   * Returns the list of superheroes.
   */
  get() {
    return this.superheroes;
  }

  /**
   * Sets the list of superheroes.
   * @param superheroes - The updated list of superheroes.
   */
  set(superheroes: GetSuperheroDto[]): void {
    this.superheroes = superheroes;
  }

  /**
   * Retrieves superheroes sorted by humility score in descending order.
   * @returns Sorted array of superheroes.
   */
  getSuperheroes(): GetSuperheroDto[] {
    return this.get().sort((a, b) => b['humilityScore'] - a['humilityScore']);
  }

  /**
   * Adds a new superhero to the list.
   * @param superhero - The superhero to add.
   */
  createSuperhero(superhero: CreateSuperheroDto) {
    this.set([...this.get(), superhero]);
  }
}
