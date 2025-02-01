import { SuperheroService } from './superhero.service';
import { GetSuperheroDto } from './dto/get-superhero.dto';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(() => {
    service = new SuperheroService();
  });

  it('should return an empty array initially', () => {
    expect(service.getSuperheroes()).toEqual([]);
  });

  it('should create and store a superhero', () => {
    const newHero: CreateSuperheroDto = {
      name: 'Batman',
      superpower: 'money',
      humilityScore: 8,
    };
    service.createSuperhero(newHero);

    expect(service.getSuperheroes()).toHaveLength(1);
    expect(service.getSuperheroes()[0]).toEqual(newHero);
  });

  it('should return superheroes sorted by humilityScore in descending order', () => {
    const heroes: GetSuperheroDto[] = [
      { name: 'Superman', superpower: 'gravity', humilityScore: 5 },
      { name: 'Batman', superpower: 'money', humilityScore: 8 },
      { name: 'Wonder Woman', superpower: 'warior', humilityScore: 10 },
    ];

    service.set(heroes);
    const sortedHeroes = service.getSuperheroes();

    expect(sortedHeroes[0].name).toBe('Wonder Woman');
    expect(sortedHeroes[1].name).toBe('Batman');
    expect(sortedHeroes[2].name).toBe('Superman');
  });
});
