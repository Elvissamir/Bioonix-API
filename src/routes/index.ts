import { Router } from 'express'
import Logger from '../services/logger'
import greeting from './greeting'
import customers from './customers'

const router = Router()

const getRoutes = () => {
    Logger.info('Loading routes...')

    router.use('/api/greeting', greeting)
    router.use('/api/customers', customers)

    return router
}

export { getRoutes }