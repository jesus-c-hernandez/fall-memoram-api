import { Router } from 'express';
import { getAllScores, postScore } from '../controllers';
import { verifyToken } from '../middlewares';

const router = Router();

// score [GET]
router.get('/', getAllScores);
// score [POST]
router.post('/', verifyToken, postScore);

export default { router };
