import { LoggerI } from "../logger/Logger"

interface ErrorHandlerParams {
    logger: LoggerI
}

interface ErrorHandlerI {
    handleError: (err: Error) => Promise<void>
}

class ErrorHandler implements ErrorHandlerI {
    private readonly logger: LoggerI

    constructor({ logger }: ErrorHandlerParams) {
        this.logger = logger
    }

    async handleError(err: Error): Promise<void> {
        this.logger.error(err.message+' '+err.stack)
    }
}

export default ErrorHandler