import { Router } from "express";
import customerGetAllController from "../customer/controllers/customerGetAllController";
import customerPostController from "../customer/controllers/customerPostController";

const router = Router()

router.get('/', customerGetAllController)
router.post('/', customerPostController)

export default router
