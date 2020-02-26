import * as mongoose from 'mongoose';

export const GenreSchema = new mongoose.Schema({
  name: { type: String, required: true }
})

export interface Genre {
  name: string,
  id: string,
}
