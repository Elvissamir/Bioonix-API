import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { CustomerResource } from "../core/CustomerResource"
import getAllCustomers from "../interactors/getAllCustomers"

interface GetAllSuccessResponse {
    data: CustomerResource[]
    status: StatusCodes
}

const customerGetAllController = async (req: Request, res: Response) => {
    const allCustomers = await getAllCustomers()

    const responseData: GetAllSuccessResponse = { status: StatusCodes.OK, data: allCustomers }
    res.send(responseData)
}

export default customerGetAllController