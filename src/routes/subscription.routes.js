import { Router } from 'express';
import {
    getSubscribedChannels,
    getUserChannelSubscribers,
    toggleSubscription,
} from "../controllers/subscription.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();

router.use(verifyJWT); 

router.route("/channel/:channelId").post(toggleSubscription);

router.route("/my-subscribed-channels").get(getSubscribedChannels)

router.route("/my-subscribers").get(getUserChannelSubscribers);

export default router