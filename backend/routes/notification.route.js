import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { getNotifications, deleteNotifications, deleteSelectedNotification } from '../controllers/notification.controller.js';

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);
router.delete("/:id", protectRoute, deleteSelectedNotification);

export default router;