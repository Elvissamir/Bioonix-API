import Customer from "../core/Customer"
import { CustomerData } from "../core/customer.interface"

interface CreateCustomerParams {
    data: CustomerData
}

const createCustomer = async ({ data }: CreateCustomerParams) => {
    const customer = await Customer.create(data)

    return customer
}

export default createCustomer