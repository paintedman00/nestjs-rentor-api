import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Genre } from '../schemas/genre.model'

@Injectable()
export class GenresService {
  constructor(@InjectModel('Genre') private readonly genreModel: Model<Genre>) { }

  async addGenre(name: string) {
    const genre = new this.genreModel({ name });
    const result = await genre.save();
    return result;

  }

  async getAllGenres() {
    const genres = await this.genreModel.find();
    return genres;
  }

  async getOneGenre(genId) {
    const genre = await this.findGenre(genId);
    return genre;
  }

  async findGenre(id) {
    let genre;
    try {
      genre = await this.genreModel.findById(id);
    }
    catch (ex) {
      throw new NotFoundException('Could not found the genre')
    }
    return genre;

  }

  async updateGenre(genId: string, name: string) {
    const updatedGenre = await this.findGenre(genId);
    if (name) {
      updatedGenre.name = name;
    }
    updatedGenre.save();
    return updatedGenre;
  }

  async deleteGenre(id) {
    const result = await this.genreModel.deleteOne({ _id: id });
    if (result.n === 0) {
      throw new NotFoundException('Could not found the genre')
    }
    return result
  }
}

