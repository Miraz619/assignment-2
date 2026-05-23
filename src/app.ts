import express, { type Application } from 'express'

const app :Application = express()

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));


app.use('/api/auth',)

export default app