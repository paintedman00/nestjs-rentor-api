import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { GenresService } from './genres.service'

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) { }

  @Post()
  async addGenre(@Body('name') genName: string) {
    const genre = await this.genresService.addGenre(genName);
    return genre;
  }

  @Get()
  async getAllGenres() {
    const genres = await this.genresService.getAllGenres();
    return genres
  }

  @Get(':id')
  async getOneGenre(@Param('id') genId: string) {
    const genre = await this.genresService.getOneGenre(genId)
    return genre;
  }

  @Patch(':id')
  async updateGenre(@Param('id') genId: string, @Body('name') genName: string) {
    const result = await this.genresService.updateGenre(genId, genName);
    return 'The Genre Has been Updated';
  }

  @Delete(':id')
  async deleteOne(@Param('id') genId: string) {
    const result = await this.genresService.deleteGenre(genId);
    return 'The Genre has been deleted'
  }

}


