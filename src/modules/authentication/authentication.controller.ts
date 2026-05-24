import type { Request, Response } from "express"
import { autheticationService } from "./authentication.service"
import sendResponse from "../../utility/sendResponse";



const createUser=async(req:Request,res:Response)=>{

try {
    
    // console.log(req.body);
    const result= await autheticationService.createUserIntoDB(req.body);
    // console.log(result);

    
    sendResponse(res,{
        statusCode: 201,
        success:true,
        message: "User registered successfully",
        data: result
    })

} catch (error:unknown) {
    
    const errorMessage= error instanceof Error? error.message : "something went wrong";
   
    sendResponse(res,{
        statusCode: 500,
        success:false,
        message: "Internal Server Error",
        error: errorMessage
        
    })

}



}


const loginUser=async(req:Request, res: Response)=>{
  try {
    const result= await autheticationService.loginUserIntoDB(req.body);
  } catch (error) {
    
  }
    

}


export const authController={
    createUser,
    loginUser,
}