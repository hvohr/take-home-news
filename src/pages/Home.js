import './pages.css'
import ArticleCard from '../components/ArticleCard/ArticleCard'
import { useState } from 'react'

function Home(props) {
const [ catChange, setCatChange ] = useState(false)
  return (
    <section className='home-container'>
      <header>
        <img alt='two standing stick figures shaking hands' className='site-logo' src={require('../components/images/handshake.png')} />
        <h1 className='title'>USAChronicle</h1>
        <nav>
          <button className='category-button' onClick={() => props.setCategory('business')}>Business</button>
          <button className='category-button' onClick={() => props.setCategory('health')}>Health</button>
          <button className='category-button' onClick={() => props.setCategory('technology')}>Technology</button>
          <button className='category-button' onClick={() => props.setCategory('science')}>Science</button>
          <button className='category-button' onClick={() => props.setCategory('entertainment')}>Entertainment</button>
          <button className='category-button' onClick={() => props.setCategory('sports')}>Sports</button>
        </nav>
      </header>
      <section>
        {(catChange ==='true' && props.category === '') && <h1>Loading...</h1>}
        <ArticleCard articles={props.articles} />
      </section>
    </section>
  )
}

export default Home