import Customer from "../../customer/core/Customer"
import { DBModelI } from "./db.interface"

const getDBModels = () => {
    const models: DBModelI[] = [
        Customer
    ]

    return models
}

export default getDBModels