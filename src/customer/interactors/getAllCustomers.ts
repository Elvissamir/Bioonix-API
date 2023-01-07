import Customer from "../core/Customer"

const getAllCustomers = async () => {
    const customersList = await Customer.findAll()

    return customersList
}

export default getAllCustomers