import express from 'express';
const router = express.Router();
import questionRoutes from './api/index.js';

console.log("I am in the routes index.ts page!!!")
router.use('/api', questionRoutes);

export default router;
