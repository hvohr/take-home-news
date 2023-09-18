import './pages.css'
import {useParams } from 'react-router-dom'

function InduvidualArticle(props) {
  const { id } = useParams();
  const makeID = () => {
    return props.articles.find(art => art.publishedAt === id)
  }

  console.log(makeID())
  return (
    <h1>hi</h1>
  )
}

export default InduvidualArticle