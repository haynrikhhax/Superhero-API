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
  get(): Promise<GetSuperheroDto[]> {
    return new Promise((resolve) => {
      resolve(this.superheroes);
    });
  }

  /**
   * Sets the list of superheroes.
   * @param superheroes - The updated list of superheroes.
   */
  set(superheroes: GetSuperheroDto[]): Promise<void> {
    return new Promise((resolve) => {
      this.superheroes = superheroes;
      resolve();
    });
  }

  /**
   * Retrieves superheroes sorted by humility score in descending order.
   * @returns Sorted array of superheroes.
   */
  getSuperheroes(): Promise<GetSuperheroDto[]> {
    return new Promise((resolve) => {
      resolve(this.get().then((heroes) => heroes.sort((a, b) => b['humilityScore'] - a['humilityScore'])));
    });
  }

  /**
   * Adds a new superhero to the list.
   * @param superhero - The superhero to add.
   */
  createSuperhero(superhero: CreateSuperheroDto): Promise<void> {
    return new Promise((resolve) => {
      this.superheroes.push(superhero);
      resolve();
    });
  }
}
