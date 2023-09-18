import '../App/App.css'
import Error from '../../pages/Error'
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home'
import InduvidualArticle from '../../pages/InduvidualArticle'
import { data } from '../mockData'
import { getAllArticles, getSpecificCategory } from '../apiCalls'
import { useEffect, useState } from 'react'

function App() {
  const [articles, setArticles] = useState(data.articles)
  const [category, setCategory] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    getAllArticles().then(
      data => {
        setArticles(data.articles)
        setError(false)
      }
    ).catch((error) => {
      console.log(error)
      setError(true)
    })
  }, [])

  function getCategory() {
    if (category !== '') {
      getSpecificCategory(category).then(
        data => {
          setArticles(data.articles)
          setError(false)
        }
      ).catch((error) => {
        console.log(error)
        setError(true)
      })
    }
  }
  
  useEffect(() => {
    getCategory()
  }, [category])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home error={error} category={category} setCategory={setCategory} articles={articles} />} />
        <Route path='/article/:id' element={<InduvidualArticle articles={articles} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
