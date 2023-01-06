export interface LoggerI {
    info: (msg: string) => void
    error: (msg: string) => void
    warn: (msg: string) => void
}

interface LoggerParams {
    logger: LoggerI
}

class Logger implements LoggerI {
    private readonly logger: LoggerI

    constructor({ logger }: LoggerParams) {
        this.logger = logger
    }

    info (msg: string) {
        this.logger.info(msg)
    }

    error (msg: string) {
        this.logger.error(msg)
    }

    warn (msg: string) {
        this.logger.warn(msg)
    }
}

export default Logger