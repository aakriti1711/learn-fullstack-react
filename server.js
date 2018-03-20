import config from './config';
import express from 'express';
import apiRouter from './api';

const server = express();

server.set('view engine','ejs');
server.get('/', (req, res) => {
    res.render('index', {
      content: 'Hello EJS '
    });
  });
server.use('/api', apiRouter);
server.use(express.static('public'));
server.listen(config.port, () => {
    console.info('express listening on Port', config.port);
})