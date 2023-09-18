import './pages.css'
import { useParams, Link } from 'react-router-dom'

function InduvidualArticle(props) {
  const { id } = useParams();
  const makeID = () => {
    return props.articles.find(art => art.publishedAt === id)
  }
  if (makeID().content === null) {
    return (
      <section className='induvidual-container'>
        <Link to='/'><img className='home-logo' src={require('../components/images/home (1).png')}/>Return Home</Link>
        <h1 className='single-article-title'>{makeID().title}</h1>
        <h4>Author(s): {makeID().author}</h4>
        {makeID().urlToImage === null && <img className='no-article-image' src={require('../components/images/no-image.png')}></img>}
        <img className='single-article-image' src={makeID().urlToImage}></img>
        <h5 className='source'>Original Source: <a className='original-source' href={makeID().url}>{makeID().source.name}</a></h5>
        <section>
          <p className='single-article-content'>No content available for this article --- visit the <a href={makeID().url}>original article here</a>! We apologize for this inconvienence.</p>
        </section>
      </section>
    )
  } else {
    return (
      <section className='induvidual-container'>
        <Link className='return-home-button' to='/'><img className='home-logo' src={require('../components/images/home (1).png')}/>Return Home</Link>
        <h1 className='single-article-title'>{makeID().title}</h1>
        <h4>Author(s): {makeID().author}</h4>
        {makeID().urlToImage === null && <img className='no-article-image' src={require('../components/images/no-image.png')}></img>}
        <img className='single-article-image' src={makeID().urlToImage}></img>
        <h5 className='source'>Original Source: <a className='original-source' href={makeID().url}>{makeID().source.name}</a></h5>
        <section>
          <p className='single-article-content'>{makeID().content}</p>
        </section>
      </section>
    )
  }
}

export default InduvidualArticle