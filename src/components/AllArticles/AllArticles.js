function AllArticles(props) {
  return (
    <section>
      <img src={require(props.urlToImage)}></img>
      <h2>{props.title}</h2>
    </section>
  )
}

export default AllArticles