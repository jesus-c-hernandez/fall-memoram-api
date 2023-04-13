import { ScoreModel } from '../models';
import { Score } from '../interfaces';

const getScores = async () => {
  const respGetAll = await ScoreModel.find({}).sort({ score: -1 }).limit(10);
  return respGetAll;
};

const insertScore = async (score: Score) => {
  const respInsert = ScoreModel.create(score);
  return respInsert;
};

export { insertScore, getScores };
