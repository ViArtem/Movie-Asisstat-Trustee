import { Module } from '@nestjs/common';
import { MovieApisController } from './movie-apis.controller';
import { MovieApisService } from './movie-apis.service';

@Module({
  controllers: [MovieApisController],
  providers: [MovieApisService]
})
export class MovieApisModule {}
