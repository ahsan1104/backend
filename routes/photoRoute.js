import express from 'express';
import { photo } from '../allData/photo.js';

export const photoRoutes = express.Router();

photoRoutes.get('/photo',(req,res)=>{
    res.status(200).send({status:200,message:'succes',data:photo})
})