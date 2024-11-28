import express from 'express';
const router = express.Router();
import {
  getRandomQuestions
} from '../../controllers/questionController.js';
console.log("I am in the questionsRouters.ts page!!!")

router.route('/random').get(getRandomQuestions);

export default router;
