import { Router } from "express";
import customerGetAllController from "../customer/controllers/customerGetAllController";

const router = Router()

router.get('/', customerGetAllController)

export { router }
