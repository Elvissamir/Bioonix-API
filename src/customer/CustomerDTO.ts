import CustomerModel from "./core/CustomerModel"
import { CustomerResource } from "./core/CustomerResource"

class CustomerDTO {
    static mapModelToResource(model: CustomerModel): CustomerResource {
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

    static mapModelListToResource(modelList: CustomerModel[]): CustomerResource[] {
        const customerResourceList: CustomerResource[] = modelList.map(model => {
            return this.mapModelToResource(model)
        })

        return customerResourceList
    }
}

export default CustomerDTO