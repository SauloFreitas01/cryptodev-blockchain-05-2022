import express, { Request, Response } from 'express';

const port : number = 8080;

const app = express()

app.get('/', (req: Request ,res:Response) => {
  res.send('Servidor de pé')
})

app.post('/user', (req, res) => {
  
})


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})