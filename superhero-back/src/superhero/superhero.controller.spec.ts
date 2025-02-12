import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { GetSuperheroDto } from './dto/get-superhero.dto';

describe('SuperheroController', () => {
  let controller: SuperheroController;
  let service: SuperheroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [
        {
          provide: SuperheroService,
          useValue: {
            createSuperhero: jest.fn(),
            getSuperheroes: jest.fn().mockReturnValue([]),
          },
        },
      ],
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);
    service = module.get<SuperheroService>(SuperheroService);
  });

  it('should call createSuperhero on the service when create() is called', async () => {
    const newHero: CreateSuperheroDto = {
      name: 'Spiderman',
      superpower: 'spider-senses',
      humilityScore: 7,
    };

    await controller.create(newHero);

    expect(service.createSuperhero).toHaveBeenCalledWith(newHero);
  });

  it('should return superheroes from the service when get() is called', async () => {
    const superheroes: GetSuperheroDto[] = [
      { name: 'Iron Man', superpower: 'intellect', humilityScore: 6 },
    ];

    jest.spyOn(service, 'getSuperheroes').mockResolvedValue(superheroes);

    const result = await controller.get();

    expect(result).toEqual(superheroes);
    expect(service.getSuperheroes).toHaveBeenCalledTimes(1);
  });
});
