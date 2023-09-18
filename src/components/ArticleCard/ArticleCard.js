import './ArticleCard.css'

function ArticleCard(props) {
  const articleList = props.articles.map((article) => {
    if (article.title !== '[Removed]') {
      return (
        <section key={Date.now() + props.articles.indexOf(article)} className='article-container'>
          <img className='article-image' src={article.urlToImage} alt={article.description} />
          <h3 className='article-title'>{article.title}</h3>
          <p className='article-description'>{article.description}</p>
        </section>
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