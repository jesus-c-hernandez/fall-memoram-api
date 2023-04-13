import { ScoreModel } from '../models';
import { Score } from '../interfaces';

const getScores = async () => {
  const respGetAll = await ScoreModel.find({});
  return respGetAll;
};

const insertScore = async (score: Score) => {
  const respInsert = ScoreModel.create(score);
  return respInsert;
};

export { insertScore, getScores };
