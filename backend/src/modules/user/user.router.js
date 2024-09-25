import { Router } from "express";
import { deleteAllUsers, deleteUser, getAllUsers, getUser, updateUser } from "./user.controller.js";

const router = Router()

router.route('/').get(getAllUsers).delete(deleteAllUsers)
router.route('/:id').delete(deleteUser).get(getUser).put(updateUser)


export default router