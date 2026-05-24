import { pool } from "../../db";
import type { Ilogin, Iuser } from "./authetication.interface"
import bcrypt from "bcrypt";

 


const createUserIntoDB=async(payload:Iuser)=>{

    const {name,email,password, role}= payload;

    const hashPassword = await bcrypt.hash(password, 11);

    const validRole=['contributor', 'maintainer'];

    if(role && !validRole.includes(role as string)){
          throw new Error('Invalid role');
    }
    
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
    
    const userInfo=await pool.query(`
        
        SELECT * FROM users WHERE email=$1
        
        `,[email]);
    

     if (userInfo.rows.length===0){
        throw new Error("Invalid email");
     }

     const user=userInfo.rows[0]
     const matchPassword= await bcrypt.compare(password,userInfo.rows[0].password);
     
     if(!matchPassword){
        throw new Error("Inavalid password");
     }

     
     
     
}


export const autheticationService={

    createUserIntoDB,
    loginUserIntoDB,
}