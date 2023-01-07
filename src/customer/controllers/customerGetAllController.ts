import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { CustomerResource } from "../core/CustomerResource"
import CustomerDTO from "../CustomerDTO"
import getAllCustomers from "../interactors/getAllCustomers"

interface GetAllSuccessResponse {
    data: CustomerResource[]
    status: StatusCodes
}

const customerGetAllController = async (req: Request, res: Response) => {
    const customersModelList = await getAllCustomers()

    const customerResourceList = CustomerDTO.mapModelListToResource(customersModelList)
    const responseData: GetAllSuccessResponse = { status: StatusCodes.OK, data: customerResourceList }
    res.send(responseData)
}

export default customerGetAllController