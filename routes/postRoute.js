import express from 'express';
import { post } from '../allData/post.js';

export const postRoutes = express.Router();

postRoutes.get('/post',(req,res)=>{
    res.status(200).send({status:200,message:'succes',data:post})
})

