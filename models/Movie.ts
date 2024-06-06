import mongoose from "mongoose";

export interface Movies extends mongoose.Document {
  id: number;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  original_title: string;
  overview: string;
  trending_time: string[];
}

const MovieSchema = new mongoose.Schema<Movies>({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  backdrop_path: {
    type: String,
    default: null,
  },
  poster_path: {
    type: String,
    default: null,
  },
  release_date: {
    type: String,
    default: null,
  },
  original_title: {
    type: String,
    default: null,
  },
  overview: {
    type: String,
    default: null,
  },
  trending_time: {
    type: [String],
    default: null,
  },
});

export default mongoose.models.Movie ||
  mongoose.model<Movies>("Movie", MovieSchema);
