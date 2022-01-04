import express from 'express';
import {getPlayerByid, getAllPlayers } from '../../controllers/playersControllers/playersController.js'

const router = express.Router();

router.get('/', getAllPlayers);
router.get('/:id', getPlayerByid);

export default router