import express from 'express';
import { sendMessage, streamMessage } from '../controllers/chatController.js';

const router = express.Router();

// Send a message and get AI response
router.post('/message', sendMessage);

// Stream AI response (for real-time streaming)
router.post('/stream', streamMessage);

export default router;
