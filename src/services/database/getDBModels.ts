import CustomerModel from "../../customer/core/CustomerModel"
import { DBModelI } from "./db.interface"

const getDBModels = () => {
    const models: DBModelI[] = [
        CustomerModel
    ]

    return models
}

export default getDBModels