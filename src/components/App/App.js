import '../App/App.css'
import { Routes, Route, NavLink } from "react-router-dom";
import Home from '../../pages/Home'
import { data } from '../mockData'
import {getAllArticles} from '../apiCalls'
import { useEffect, useState } from 'react'

function App() {
  const [articles, setArticles] = useState(data.articles)

  // useEffect (() => {
  //   getAllArticles().then(
  //     data => setArticles(data.articles)
  //   )
  // }, [])


  return (
    <div className="App">
      <Routes>
        <Route path ='/' element={<Home articles={articles}/>} />
      </Routes>
    </div>
  );
}

export default App;
