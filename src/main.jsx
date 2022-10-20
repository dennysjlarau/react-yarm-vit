import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWordApp} from './HelloWordApp'
import {FirstApp} from './FirstApp'

import './styles-global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp subTitle={123}/>
  </React.StrictMode>
);