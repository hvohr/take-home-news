function ArticleCard(props) {
  const articleList = props.articles.map((article) => {
    return (
      <section className='article-container'>
        <h1>hello</h1>
        <img src={article.urlToImage} alt={article.description} />
        <h2>{article.title}</h2>
        <h2>{article.description}</h2>
      </section>
    )
  })
  return (
    <section>
      {articleList}
      </section>
  )
}

export default ArticleCard;