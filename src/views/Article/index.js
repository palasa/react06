import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import ArticleDetail from './ArticleDetail'

export default function Article(props) {

  return (
    <div>
      <Link to="/article/1" >文章一</Link>
      <Link to="/article/2" >文章二</Link>

      <Routes>
        <Route path=':id' element={<ArticleDetail/>}/>
      </Routes>
    </div>
  )
}
