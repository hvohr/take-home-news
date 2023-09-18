import './pages.css'
import { useParams, Link } from 'react-router-dom'

function InduvidualArticle(props) {
  const { id } = useParams();
  const makeID = () => {
    return props.articles.find(art => art.publishedAt === id)
  }
  let newDate = makeID().publishedAt.split('T')[0].split('-').reverse().join('/')
  if (makeID().content === null) {
    return (
      <section className='induvidual-container'>
        <Link className='return-home-button' to='/'>Home</Link>
        <h1 className='single-article-title'>{makeID().title}</h1>
        <div className='below-header'>
          <h3 className='single-published-time'>Publish Date: {newDate}</h3>
          {makeID().author === null && <h4 className='single-author'>Author(s): No author available</h4>}
          {makeID().author !== null && <h4 className='single-author'>Author(s): {makeID().author}</h4>}
        </div>
        {makeID().urlToImage === null && <img className='no-article-image' alt='empty camera and label' src={require('../components/images/no-image.png')}></img>}
        <img className='single-article-image' alt={makeID().description} src={makeID().urlToImage} />
        <h5 className='source'>Original Source: <a className='original-source' href={makeID().url}>{makeID().source.name}</a></h5>
        <section>
          <p className='single-article-content'>No content available for this article --- visit the <a href={makeID().url}>original article here</a>! We apologize for this inconvienence.</p>
        </section>
      </section>
    )
  } else {
    return (
      <section className='induvidual-container'>
        <Link className='return-home-button' to='/'>Home</Link>
        <h1 className='single-article-title'>{makeID().title}</h1>
        <div className='below-header'>
          <h3 className='single-published-time'>Publish Date: {newDate}</h3>
          {makeID().author === null && <h4 className='single-author'>Author(s): No author(s) available</h4>}
          {makeID().author !== null && <h4 className='single-author'>Author(s): {makeID().author}</h4>}
        </div>
        {makeID().urlToImage === null && <img className='no-article-image' alt='empty camera and label' src={require('../components/images/no-image.png')}></img>}
        <img className='single-article-image' alt={makeID().description} src={makeID().urlToImage}></img>
        <h5 className='source'>Original Source: <a className='original-source' href={makeID().url}>{makeID().source.name}</a></h5>
        <section>
          <p className='single-article-content'>{makeID().content.split('[')[0]}<a className='original-source' href={makeID().url}>click to continue reading</a></p>
        </section>
      </section>
    )
  }
}

export default InduvidualArticle