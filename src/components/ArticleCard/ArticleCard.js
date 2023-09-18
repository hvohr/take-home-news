import './ArticleCard.css'
import { Link } from 'react-router-dom'

function ArticleCard(props) {

  const articleList = props.articles.map((article) => {

    if (article.title !== '[Removed]') {
      return (
        <Link to={`/${article.publishedAt}`}>
          <section key={Date.now() + props.articles.indexOf(article)} className='article-container'>
            {article.urlToImage === null && <img className='no-article-image' src={require('../images/No-Image-Placeholder.svg.png')}></img>}
            <img className='article-image' src={article.urlToImage} alt={article.description} />
            <h3 className='article-title'>{article.title}</h3>
            <p className='article-description'>{article.description}</p>
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