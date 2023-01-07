import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { CustomerResource } from "../core/CustomerResource"
import CustomerDTO from "../CustomerDTO"
import createCustomer from "../interactors/createCustomer"

interface PostSuccessResponse {
    data: CustomerResource
    status: StatusCodes
}

const customerPostController = async (req: Request, res: Response) => {
    const newCustomer = await createCustomer({ data: req.body })
    const customerResource = CustomerDTO.mapModelToResource(newCustomer)
    
    const responseData: PostSuccessResponse = { status: StatusCodes.OK, data: customerResource }
    res.send(responseData)
}

export default customerPostController