import './pages.css'
import ArticleCard from '../components/ArticleCard/ArticleCard'
import { useState } from 'react'

function Home(props) {
const [ catChange, setCatChange ] = useState(false)
  return (
    <section className='home-container'>
      {props.error === true && <section className='server-error'>
        <h1>An server error has occured ! -- Please refresh the page</h1>
      </section>}
      {props.error === false && <header>
        <img alt='outline of newspaper frontpage' className='site-logo' src={require('../components/images/newspaper-folded.png')} />
        <h1 className='title'>USAChronicle</h1>
        <nav>
          <button className='category-button' onClick={() => {
            props.setCategory('business')
            setCatChange(true)}
          }>Business</button>
          <button className='category-button' onClick={() => {
            props.setCategory('health')
            setCatChange(true)
          }}>Health</button>
          <button className='category-button' onClick={() => {
            props.setCategory('technology')
            setCatChange(true)
          }}>Technology</button>
          <button className='category-button' onClick={() => {
            props.setCategory('science')
            setCatChange(true)
          }}>Science</button>
          <button className='category-button' onClick={() => {
            props.setCategory('entertainment')
            setCatChange(true)
          }}>Entertainment</button>
          <button className='category-button' onClick={() => {
            props.setCategory('sports')
            setCatChange(true)
          }}>Sports</button>
        </nav>
      </header>}
      {props.error === false && <section>
        {(catChange ==='true' && props.category === '') && <h1 className='loading'>Loading...</h1>}
        <ArticleCard articles={props.articles} />
      </section>}
    </section>
  )
}

export default Home