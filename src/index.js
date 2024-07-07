import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './frontend/Homepage';
import Login from './frontend/Login';
import Register from './frontend/Register';
import AddPost from './frontend/AddPost';
import DeletePost from './frontend/DeletePost';
import RetrievePostById from './frontend/RetrievePostById';
import UpdatePost from './frontend/UpdatePost';
import Dashboard from './frontend/Dashboard';
import BlogPostList from './frontend/BlogPostList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Homepage />}></Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/register' element={<Register />}></Route>
      <Route exact path='/addpost' element={<AddPost />}></Route>
      <Route exact path='/delete' element={<DeletePost/>}></Route>
      <Route exact path='/update' element={<UpdatePost/>}></Route>
      <Route exact path='/getbyid' element={<RetrievePostById/>}></Route>
      <Route exact path='/listblogpost' element={<BlogPostList/>}></Route>
      <Route exact path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
