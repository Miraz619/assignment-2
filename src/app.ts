import express, { type Application } from 'express'
import { authRouter } from './modules/authentication/authenticatio.route';

const app :Application = express()

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));


app.use('/api/auth',authRouter)

export default app