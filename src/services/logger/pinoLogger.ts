import path from 'path'
import pino from 'pino'
import environment from '../environment/Environment'

const logFileDir = path.join(__dirname, '../../logs', 'combined.log')

const pinoLogger = pino({
    enabled: environment.envType === 'DEV' || environment.envType === 'PROD',
    transport: {
        targets: [
            {
                level: 'info',
                target: 'pino-pretty',
                options: {
                    translateTime: 'SYS:dd-mm-yy - HH:MM:ss',
                    ignore: 'pid,hostname'
                }
            },
            {
                level: 'info',
                target: 'pino/file',
                options: {
                    translateTime: 'SYS:dd-mm-yy - HH:MM:ss',
                    ignore: 'pid,hostname',
                    destination: logFileDir
                },
            }
        ],
    },
})

export default pinoLogger