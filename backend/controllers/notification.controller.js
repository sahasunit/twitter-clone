import Notification from "../models/notification.model.js";
import User from "../models/user.model.js";

export const getNotifications = async (req,res) => {
    try {
        const userId = req.user._id.toString();

        const notifications = await Notification.find({to: userId}).populate({
            path: "from",
            select: "username profileImg"
        });

        await Notification.updateMany({to: userId}, {read: true});

        res.status(200).json(notifications);
    } catch (error) {
        console.log("Error in getNotifications controller: ", error.message);
        res.status(500).json({error: error.message});
    }
}

export const deleteNotifications = async (req,res) => {
    try {
        const userId = req.user._id.toString();
        await Notification.deleteMany({to: userId});
        res.status(200).json({message: "Notifications deleted succesfully"});
    } catch (error) {
        console.log("Error in getNotifications controller: ", error.message);
        res.status(500).json({error: error.message});
    }
}

export const deleteSelectedNotification = async(req,res) => {
    try {
        const userId = req.user._id.toString();
        const notificationId = req.params.id;
        const notification = await Notification.findById(notificationId);

        if(!notification) return res.status(404).json({error: "Notification not found"});

        if(notification.to.toString() !== userId.toString()){
            return res.status(403).json({error: "You are not allowed to delete this notification"});
        }
        await Notification.findByIdAndDelete(notificationId);
        res.status(200).json({message: "Notifications deleted succesfully"});
    } catch (error) {
        console.log("Error in deleteSelectedNotification controller: ", error.message);
        res.status(500).json({error: error.message});
    }
}