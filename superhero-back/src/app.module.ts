import { Module } from '@nestjs/common';
import { SuperheroModule } from './superhero/superhero.module';

@Module({
  imports: [SuperheroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
