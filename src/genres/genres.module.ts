import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';
import { GenreSchema } from '../schemas/genre.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Genre', schema: GenreSchema }])],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule { }
