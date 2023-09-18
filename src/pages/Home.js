import './pages.css'
import AllArticles from '../components/AllArticles'

function Home() {
  return (
    <section>
      <header>
        <img className='site-logo' src={require('../components/images/handshake.png')} />
        <h1 className='title'>USAChronicle</h1>
      </header>
      <main>
        <AllArticles image={data.urlToImage} title={data.title}/>
      </main>
    </section>
  )
}

export default Home