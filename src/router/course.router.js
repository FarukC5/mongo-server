import express from "express";
//import get from "mongoose";
import ctrl from "../controllers/courses.controller";

const router = express.Router();

router.route("/courses")
    .get(ctrl.list)
    .get(ctrl.create);

router.route("courses/:id")
    .get(ctrl.read)
    .put(ctrl.update)
    .delete(ctrl.remove);

export default router;
