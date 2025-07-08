import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import AppError from "../errors/AppError";

class ErrorHandleMiddleware {
  public static handleError: ErrorRequestHandler = (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    if (error instanceof AppError) {
      response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
      return;
    }
    console.error(error);
    response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  };
}

export default ErrorHandleMiddleware;
