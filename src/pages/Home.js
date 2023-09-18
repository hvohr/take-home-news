import './pages.css'
import ArticleCard from '../components/ArticleCard/ArticleCard'

function Home(props) {
  return (
    <section className='home-container'>
      <header>
        <img alt='two standing stick figures shaking hands' className='site-logo' src={require('../components/images/handshake.png')} />
        <h1 className='title'>USAChronicle</h1>
        <nav>
          <button onClick={() => setCategory('business')}>Business</button>
          <button onClick={() => setCategory('health')}>Health</button>
          <button onClick={() => setCategory('technology')}>Technology</button>
          <button onClick={() => setCategory('science')}>Science</button>
          <button onClick={() => setCategory('entertainment')}>Entertainment</button>
          <button onClick={() => setCategory('sports')}>Sports</button>
        </nav>
      </header>
      <section>
        <ArticleCard articles={props.articles} />
      </section>
    </section>
  )
}

export default Home