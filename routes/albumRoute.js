import express from 'express';
import { albums } from '../allData/album.js';

export const albumRoutes = express.Router();

albumRoutes.get('/album',(req,res)=>{
    res.status(200).send({status:200,message:'succes',data:albums})
})