import type { Request, Response } from "express";
import { issueService } from "./issues.service";
import sendResponse from "../../utility/sendResponse";
import type { JwtPayload } from "jsonwebtoken";

const createIssue = async (req: Request, res: Response) => {
  try {
    const { id } = req.user as JwtPayload;
    // console.log(id);
    const result = await issueService.createIssueIntoDB(req.body, id);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Issue created successfully",
      data: result,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "something went wrong";

    let statusCode = 500;
    let message = "Internal Server Error";
    if (errorMessage === "type,title, description must required") {
      statusCode = 400;
      message = "type,title, description must required";
    } else if (errorMessage === "type must be bug or feature_request") {
      statusCode = 400;
      message = "type must be bug or feature_request";
    } else if (
      errorMessage === "status must be open or in_progress or resolved"
    ) {
      statusCode = 400;
      message = "status must be open or in_progress or resolved";
    }
    else if (errorMessage.includes("violates check constraint")) {
  statusCode = 400;
  message = "Invalid input";
}

    sendResponse(res, {
      statusCode,
      success: false,
      message,
      error: errorMessage,
    });
  }
};

const getAllIssue = async (req: Request, res: Response) => {
  try {
    const issues = await issueService.getIssueFromDB(req.query);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Issue created successfully",
      data: issues,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "something went wrong";

    let statusCode = 500;
    let message = "Internal Server Error";

    if (
      errorMessage === "invalid sort" ||
      errorMessage === "invalid type" ||
      errorMessage === "Invalid status"
    ) {
      statusCode = 400;
      message = "Invalid query parameter";
    }

    sendResponse(res, {
      statusCode,
      success: false,
      message,
      error: errorMessage,
    });
  }
};

export const issueController = {
  createIssue,
  getAllIssue,
};
