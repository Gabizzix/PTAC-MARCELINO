import React from 'react'
import ReactDOM from 'react-dom';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Todo from '.ToDo/Todo.jsx';
import Home from '.Home/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='ToDo' element ={<Todo />}></Route>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);