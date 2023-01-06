import Logger from "../logger";
import ErrorHandler from "./ErrorHandler";

const errorHandler = new ErrorHandler({ logger: Logger }) 

export default errorHandler