import { EnvType } from '../interfaces/env.types'

interface EnvironmentI {
    getValue: (variableName: string) => string | undefined
}

class Environment implements EnvironmentI {
    readonly envType: EnvType

    constructor() {
        if (!process.env.NODE_ENV) throw new Error('Error: Missing Environment: Add NODE_ENV as prod or dev or test')

        if (process.env.NODE_ENV === 'dev') this.envType = 'DEV'
        else if (process.env.NODE_ENV === 'prod') this.envType = 'PROD'
        else if (process.env.NODE_ENV === 'test') this.envType = 'TEST'
        else throw new Error('Error: Unknown Environment, NODE_ENV should be: dev | prod | test')
    }

    getValue(variableName: string) {
        return process.env[variableName]
    }
}

const environment = new Environment()

export default environment