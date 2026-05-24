import { pool } from "../../db";
import type { Ilogin, Iuser } from "./authetication.interface"
import bcrypt from "bcrypt";

 


const createUserIntoDB=async(payload:Iuser)=>{

    const {name,email,password, role}= payload;

    const hashPassword = await bcrypt.hash(password, 11);

    
    
    const result= await pool.query(
        `
        INSERT INTO users (name,email,password,role) VALUES ($1,$2,$3,COALESCE($4,'contributor'))
        RETURNING *
        `,
        [name,email,hashPassword,role]
    );

    delete result.rows[0].password;
    // console.log(result.rows[0]);

   return result.rows[0];

}


const loginUserIntoDB=async(payload: Ilogin )=>{
     
    const {email,password}=payload;


     
}


export const autheticationService={

    createUserIntoDB,
    loginUserIntoDB,
}