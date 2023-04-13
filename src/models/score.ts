import { Schema, model } from 'mongoose';
import { Score } from '../interfaces';

const ScoreShema = new Schema<Score>(
  {
    userName: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ScoreModel = model('scores', ScoreShema);
export { ScoreModel };
