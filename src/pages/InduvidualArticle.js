import './pages.css'
import { useParams, Link } from 'react-router-dom'

function InduvidualArticle(props) {
  const { id } = useParams();
  const makeID = () => {
    return props.articles.find(art => art.publishedAt === id)
  }
  if (makeID().content === null) {
    return (
      <section>
        <Link to='/'>Return Home</Link>
        <h1 className='single-article-title'>{makeID().title}</h1>
        <h4>{makeID().author}</h4>
        {makeID().urlToImage === null && <img className='no-article-image' src={require('../components/images/No-Image-Placeholder.svg.png')}></img>}
        <img className='single-article-image' src={makeID().urlToImage}></img>
        <section>
          <p>No content available for this article --- visit the <a href={makeID().url}>original article here</a>! We apologize for this inconvienence.</p>
        </section>
      </section>
    )
  } else {
    return (
      <section>
        <Link className='return-home-button' to='/'><img className='home-logo' src={require('../components/images/home (1).png')}/>Return Home</Link>
        <h1 className='single-article-title'>{makeID().title}</h1>
        <h4>{makeID().author}</h4>
        {makeID().urlToImage === null && <img className='no-article-image' src={require('../components/images/No-Image-Placeholder.svg.png')}></img>}
        <img className='single-article-image' src={makeID().urlToImage}></img>
        <section>
          <p>{makeID().content}</p>
        </section>
      </section>
    )
  }
}

export default InduvidualArticle