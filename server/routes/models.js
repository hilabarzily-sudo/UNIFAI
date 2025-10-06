import express from 'express';
import { getAvailableModels } from '../controllers/modelsController.js';

const router = express.Router();

router.get('/', getAvailableModels);

export default router;
