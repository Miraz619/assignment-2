import { pool } from "../../db";
import type { Iissue } from "./issue.interface";




const createIssueIntoDB=async (playload:Iissue,id:string)=>{


     const {title,description, type, status}=playload;

     const types=['bug', 'feature_request'];
     const statuse_types=['open', 'in_progress', 'resolved'];

     if(!type || !title || !description){
        throw new Error('type,title, description must required');
     }
     else if(type && !types.includes(type)){
        
        throw new Error('type must be bug or feature_request');

     }

     else if(status && !statuse_types.includes(status)){
        throw new Error('status must be open or in_progress or resolved');
     }

      const result= await pool.query(
             `
             INSERT INTO issues (title,description, type, status, reporter_id) VALUES ($1,$2,$3,COALESCE($4,'open'),$5)
             RETURNING *
             `,
             [title,description, type, status, id]
         );

     return result.rows[0];


}




export const issueService={
    createIssueIntoDB,
}