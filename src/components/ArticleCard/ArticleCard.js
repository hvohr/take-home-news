import './ArticleCard.css'
import { Link } from 'react-router-dom'

function ArticleCard(props) {
  const articleList = props.articles.map((article) => {
    let newDate = article.publishedAt.split('T')[0].split('-').reverse().join('/')
    if (article.title !== '[Removed]') {
      return (
        <Link key={Date.now() + props.articles.indexOf(article)} to={`/article/${article.publishedAt}`}>
          <section className='article-container'>
              {article.urlToImage === null && <img className='no-article-image' alt='empty camera with label' src={require('../images/no-image.png')}></img>}
              <img className='article-image' src={article.urlToImage} alt={article.description} />
            <div className='info-container'>
              <h3 className='article-title'>{article.title}</h3>
              <p className='article-description'>{article.description}</p>
              <h3 className='published-time'>Published on {newDate}</h3>
            </div>
          </section>
        </Link>
      )
    }
  })
  return (
    <section className='large-article-container'>
      {articleList}
    </section>
  )
}

export default ArticleCard;