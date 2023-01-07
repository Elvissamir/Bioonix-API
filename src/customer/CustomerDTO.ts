import Customer from "./core/Customer"
import { CustomerResource } from "./core/CustomerResource"

class CustomerDTO {
    static mapModelToResource(model: Customer): CustomerResource {
        const customerResource: CustomerResource = {
            id: model.id,
            first_name: model.first_name,
            last_name: model.last_name,
            email: model.email,
            age: model.age,
            company: model.company,
            created_at: model.createdAt,
            updated_at: model.updatedAt
        }

        return customerResource
    }

    static mapModelListToResource(modelList: Customer[]): CustomerResource[] {
        const customerResourceList: CustomerResource[] = modelList.map(model => {
            return this.mapModelToResource(model)
        })

        return customerResourceList
    }
}

export default CustomerDTO