import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, './views') ) ; //pegar a pasta do ficheiro
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);

server.use( (req: Request, res: Response) => {
    res.status(404).send('Pagina não encontrada!');
} );

server.listen(process.env.PORT);

