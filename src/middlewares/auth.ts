


import {Router, type NextFunction, type Request, type Response} from "express";
import jwt, { type JwtPayload }  from 'jsonwebtoken';
import { config } from "../config";

import { decode } from "node:punycode";
import type { ROLES } from "../types";






const auth =(...roles:ROLES[])=>{

 
      return async (req:Request,res:Response,next:NextFunction)=>{
  
        console.log(roles);
    
//    try {
    
//      const token=req.headers.authorization;

//     if(!token){
//      res.status(401).json({
//       success: false,
//       message: "unathorized",
      
//     });
    
//     }

//     const decoded=jwt.verify(token as string,config.secret) as JwtPayload;
//     // console.log(decoded);

//     const userData=await pool.query(`
      
//       SELECT * FROM users WHERE email =$1
//       `,[decoded.email])

//       // console.log(userData);
//    if(userData.rows.length===0){

//    return res.status(404).json({
//       success: false,
//       message: "not found"

//     })
//    }


//    const user=userData.rows[0];

//    if(!user.is_active){
//     res.status(403).json({

//       success:false,
//       message: "forbidden"
//     })
//    }
 
//     if(roles.length && !roles.includes(user.role)){
            
//       return res.status(403).json({

//       success:false,
//       message: "forbidden"
//     })

//     }

//    req.user=decoded
      next();
    

//    } catch (error) {
    
//      res.status(401).json({
//       message: 'invalid token'
//      })
//    }
}
}
export default auth
