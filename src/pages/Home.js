import './pages.css'
import ArticleCard from '../components/ArticleCard/ArticleCard'

function Home(props) {
  console.log(props)
  // const [category, setCategory] = useState("")
  return (
    <section className='home-container'>
      <header>
        <img alt='two standing stick figures shaking hands' className='site-logo' src={require('../components/images/handshake.png')} />
        <h1 className='title'>USAChronicle</h1>
      </header>
      <section>
        <ArticleCard articles={props.articles}/>
      </section>
    </section>
  )
}

export default Home