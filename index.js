import express from 'express';
import { postRoutes } from './routes/postRoute.js';
import cors from 'cors'
import { commentRoutes } from './routes/commentRoute.js';
import { albumRoutes } from './routes/albumRoute.js';
import { photoRoutes } from './routes/photoRoute.js';
import { todosRoutes } from './routes/todosRoute.js';
import { userRoutes } from './routes/userRoute.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.use(cors());
app.use('/Post', postRoutes)
app.use('/comment', commentRoutes)
app.use('/album', albumRoutes)
app.use('/photo', photoRoutes)
app.use('/todos', todosRoutes)
app.use('/user', userRoutes)

const PORT = 3000;
app.listen(PORT , (req , res)=>{
    console.log(`Server is running on port ${PORT}`);
})