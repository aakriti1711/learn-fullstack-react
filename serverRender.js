// fetch the data from the api
import React from 'react';
import config from './config';
import ReactDomServer from 'react-dom/server';
import App from './src/components/App';
import axios from 'axios';

const serverRender = () =>{
  axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
      return ReactDomServer.renderToString(<App initialContest ={resp.data.contests} />
    );
    });
};

export default serverRender;