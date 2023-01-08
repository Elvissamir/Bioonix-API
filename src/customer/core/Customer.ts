import { DataTypes, InitOptions, Model, ModelAttributes, Optional, Sequelize } from "sequelize"
import { dbConnection } from "../../services/database/SequelizeMysqlDB"

interface CustomerAttributes {
    id: number 
    first_name: string 
    last_name: string 
    email: string 
    age: number
    company: string 
    createdAt?: Date 
    updatedAt?: Date 
}

export interface CustomerInput extends Optional<CustomerAttributes, 'id'> {}

const modelAttributes: ModelAttributes = { 
    id: { 
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true, 
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

const modelOptions = (dbConnection: Sequelize): InitOptions =>  {
    return {
        timestamps: true,
        sequelize: dbConnection
    }
}

class Customer extends Model<CustomerAttributes, CustomerInput> implements CustomerAttributes {
    public id!: number
    public first_name!: string
    public last_name!: string
    public email!: string 
    public age!: number 
    public company!: string 
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

Customer.init(modelAttributes, modelOptions(dbConnection))

export default Customer