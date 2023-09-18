import '../App/App.css'
import Error from '../../pages/Error'
import { Routes, Route, NavLink } from "react-router-dom";
import Home from '../../pages/Home'
import InduvidualArticle from '../../pages/InduvidualArticle'
import { data } from '../mockData'
import { getAllArticles, getSpecificCategory} from '../apiCalls'
import { useEffect, useState } from 'react'

function App() {
  const [articles, setArticles] = useState(data.articles)
  const [category, setCategory] = useState('')

  // useEffect (() => {
  //   getAllArticles().then(
  //     data => setArticles(data.articles)
  //   )
  // }, [])

  // function getCategory() {
  //   if (category !== '') {
  //     getSpecificCategory(category).then(
  //       data => setArticles(data.articles)
  //     )
  //   }
  // }
  // useEffect (() => {
  //   getCategory()
  // }, [category])

return (
  <div className="App">
    <Routes>
      <Route path='/' element={<Home category={category} setCategory={setCategory} articles={articles} />} />
      <Route path='/article/:id' element={<InduvidualArticle articles={articles} />} />
      <Route path='*' element={<Error />} />
    </Routes>
  </div>
);
}

export default App;
