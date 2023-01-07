import CustomerModel from "../core/CustomerModel"

const getAllCustomers = async () => {
    const customersList = await CustomerModel.findAll()

    return customersList
}

export default getAllCustomers