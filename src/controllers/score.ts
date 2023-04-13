import { Request, Response } from 'express';
import { handleHttp } from '../utils';
import { getScores, insertScore } from '../services';

const getAllScores = async (req: Request, res: Response) => {
  try {
    const resp = await getScores();
    res.send(resp);
  } catch (err) {
    handleHttp(res, 'ERROR_GET_SCORE');
  }
};

const postScore = async ({ body }: Request, res: Response) => {
  try {
    const { userName, score } = body;
    const resp = await insertScore({ userName, score });
    res.send(resp);
  } catch (err) {
    handleHttp(res, 'ERROR_POST_SCORE');
  }
};

export { postScore, getAllScores };
