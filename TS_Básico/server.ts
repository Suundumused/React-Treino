import express from 'express';
import cors from 'cors';

import { getAllUsers, createUser, findUserById } from './users.ts';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/users', getAllUsers);
app.get('/api/users/:id', findUserById);
app.post('/api/users', createUser);

/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Ola Mundo! Servidor Node.js rodando.');
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});*/