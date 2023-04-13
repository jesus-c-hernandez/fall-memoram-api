import { Router } from 'express';
import score from './score';

const router = Router();

router.use('/score', score.router);

export { router };
