import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// const cors = require('cors');
// const express = require('express');
// const morgan = require('morgan');
// const fs = require('fs');
// const bodyParser = require('body-parser');
// const promisify = require('util').promisify;

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))