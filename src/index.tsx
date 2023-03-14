import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//初始化一般放在最前
import 'reset-css'
//ui框架样式

//组件样式
import "@/assets/style/global.scss"

//组件样式

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


