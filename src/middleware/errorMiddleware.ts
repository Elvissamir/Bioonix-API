import { NextFunction, Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { getReasonPhrase } from "http-status-codes/build/cjs/utils-functions"
import errorHandler from "../services/errors"

const errorMiddleware = async (err: Error, req: Request, res: Response, next: NextFunction) => {
    await errorHandler.handleError(err)
    const code = StatusCodes.INTERNAL_SERVER_ERROR

    return res.status(code).send(getReasonPhrase(code))
}

export default errorMiddleware