import './pages.css'
import getAllArticles from '../components/apiCalls'
import { useEffect, useState } from 'react'
import data from '../components/mockData'
import AllArticles from '../components/AllArticles/AllArticles'

function Home() {
  const [category, setCategory] = useState("")
  const [articles, setArticles] = useState()

  return (
    <section>
      <header>
        <img alt='two standing stick figures shaking hands' className='site-logo' src={require('../components/images/handshake.png')} />
        <h1 className='title'>USAChronicle</h1>
      </header>
      <main>
        <AllArticles category={category} />
      </main>
    </section>
  )
}

export default Home