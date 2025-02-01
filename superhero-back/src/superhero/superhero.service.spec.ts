import { SuperheroService } from './superhero.service';
import { GetSuperheroDto } from './dto/get-superhero.dto';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(() => {
    service = new SuperheroService();
  });

  it('should return an empty array initially', async () => {
    const superheroes = await service.getSuperheroes();
    expect(superheroes).toEqual([]);
  });

  it('should create and store a superhero', async () => {
    const newHero: CreateSuperheroDto = {
      name: 'Batman',
      superpower: 'money',
      humilityScore: 8,
    };
    
    await service.createSuperhero(newHero);

    const superheroes = await service.getSuperheroes();
    expect(superheroes).toHaveLength(1);
    expect(superheroes[0]).toEqual(newHero);
  });

  it('should return superheroes sorted by humilityScore in descending order', async () => {
    const heroes: GetSuperheroDto[] = [
      { name: 'Superman', superpower: 'gravity', humilityScore: 5 },
      { name: 'Batman', superpower: 'money', humilityScore: 8 },
      { name: 'Wonder Woman', superpower: 'warrior', humilityScore: 10 },
    ];

    await service.set(heroes);
    const sortedHeroes = await service.getSuperheroes();

    expect(sortedHeroes[0].name).toBe('Wonder Woman');
    expect(sortedHeroes[1].name).toBe('Batman');
    expect(sortedHeroes[2].name).toBe('Superman');
  });
});
