import React from 'react'
import { Route, Routes,  NavLink as Link, } from 'react-router-dom'
import { Article, Home, Users, NotFound } from './views'

export default function App() {
  return (
    <div>
      App
      <ul>
        <li><Link to="/home">首页</Link></li>
        <li><Link to="/article">文章</Link></li>
        <li><Link to="/users">用户</Link></li>
      </ul>
      
      <Routes>
        {/* <Route path='/home' render={()=>{
          return <Home x={1}/>
        }} /> */}
        <Route path='/home' element={<Home/>}/>

        {/* 方便配置article子路由 */}
        <Route path='/article/*' element={<Article/>} />
        <Route path='/users' element={<Users/>} />

        {/* 打开/时默认跳转到Home , react-router-dom v6 */}        
        <Route path='/' element={<Home/>} />

        <Route path='*' element={<NotFound/>} />
      </Routes>


    </div>
  )
}
