import { Application, Request, response, Response } from "express";
import express from 'express';

const server: Application = express();
const port = 3000;

server.get('/', (req: Request, res: Response) => {
    res.send('holis');
});


// server.listen(port, () => {
//     // console.log(`Connected successfully on port ${port}`)
// });

module.exports = server