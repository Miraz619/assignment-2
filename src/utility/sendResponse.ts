import type { Response } from "express";




type TResponse<T,U>={

 statusCode:number;
 success: boolean;
 message: string;
 data?: T;
 error?: U;
}



const sendResponse = <T,U> (res:Response, data:TResponse<T,U>)=>{

     res.status(data.statusCode).json({
        success: data.success,
        message: data.message,
        data:data.data,
        error:data.error
    })

}

export default sendResponse;