import type { Response } from "express";




type TResponse<T,U>={

 statusCode:number;
 success: boolean;
 message: string;
 data?: T;
 errors?: U;
}



const sendResponse = <T,U> (res:Response, data:TResponse<T,U>)=>{

     res.status(data.statusCode).json({
        success: data.success,
        message: data.message,
        data:data.data,
        errors:data.errors
    })

}

export default sendResponse;