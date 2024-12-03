import express from 'express';
import { comment } from '../allData/comment.js';

export const commentRoutes = express.Router();

commentRoutes.get('/comment',(req,res)=>{
    res.status(200).send({status:200,message:'succes',data:comment})
})