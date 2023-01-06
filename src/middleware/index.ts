import helmet from "helmet"
import cors from 'cors'
import express from 'express'
import compression from "compression"
import environment from "../services/environment/Environment"

const getMiddleware = () => {
    if (environment.envType !== 'TEST') {
        return [
            helmet(),
            cors(),
            express.json(),
            compression(),
        ]
    }
    else {
        return [ 
            express.json(),
        ]
    }
}

export default getMiddleware