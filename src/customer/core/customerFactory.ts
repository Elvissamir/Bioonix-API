import { faker } from "@faker-js/faker"
import { CustomerData } from "./customer.interface"
import Customer from "./Customer"

interface CustomerFactoryParams {
    count: number 
}

const customerFactory = async ({ count }: CustomerFactoryParams) => {
    const fakeDataList: CustomerData[] = []

    for(let i = 1; i < count; i++) {
        fakeDataList.push({
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email(),
            age: parseInt(faker.random.numeric()),
            company: faker.company.name()
        })
    }

    const customersList = await Customer.bulkCreate(fakeDataList)

    return customersList
}

export default customerFactory